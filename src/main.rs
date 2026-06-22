use postcard_cobs::{decode, encode, max_encoding_length};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let input = b"hello\x00world";
    let mut encoded = vec![0u8; max_encoding_length(input.len())];
    let encoded_len = encode(input, &mut encoded);
    encoded.truncate(encoded_len);

    let mut decoded = vec![0u8; input.len()];
    let decoded_len = decode(&encoded, &mut decoded)?;

    println!("postcard-cobs demo");
    println!("  input   : {:?}", input);
    println!("  encoded : {:?}", encoded);
    println!("  decoded : {:?}", &decoded[..decoded_len]);

    #[cfg(all(target_arch = "wasm32", any(target_os = "wasi", target_os = "unknown")))]
    {
        use wasi_v0_11 as wasi_latest;

        let message = "Hello from wasi 0.11.1\n";
        let iov = wasi_latest::Ciovec {
            buf: message.as_ptr(),
            buf_len: message.len(),
        };
        wasi_latest::fd_write(1, &[iov])?;

        let legacy_iov = wasi::Ciovec {
            buf: message.as_ptr(),
            buf_len: message.len(),
        };
        wasi::fd_write(1, &[legacy_iov])?;
    }

    #[cfg(not(all(target_arch = "wasm32", any(target_os = "wasi", target_os = "unknown"))))]
    {
        println!("wasi 0.10.2 : linked (use wasm32-wasip1 target for syscalls)");
        println!("wasi 0.11.1 : linked as wasi-v0_11 (use wasm32-wasip1 target for syscalls)");
    }

    Ok(())
}
