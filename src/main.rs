use reqwest::blocking::Client;
use serde_json::Value;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let url = std::env::var("SAMPLE_URL")
        .unwrap_or_else(|_| "https://httpbin.org/get".to_string());

    println!("Rust version: {}", rustc_version_runtime::version());
    println!("Fetching: {url}");

    let client = Client::builder().timeout(std::time::Duration::from_secs(10)).build()?;
    let response = client.get(&url).send()?;

    let status = response.status();
    let body = response.text()?;
    let preview = &body[..body.len().min(200)];

    println!("Status : {status}");
    println!("Bytes  : {}", body.len());
    println!("Preview: {preview}");

    let json: Value = serde_json::from_str(&body)?;
    println!("Origin : {}", json["origin"]);

    Ok(())
}
