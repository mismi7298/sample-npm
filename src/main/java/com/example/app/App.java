package com.example.app;

import org.apache.commons.compress.archivers.ArchiveStreamFactory;
import org.apache.commons.compress.compressors.CompressorStreamFactory;
import tools.jackson.databind.json.JsonMapper;

import java.util.Map;

public final class App {

    public static void main(String[] args) throws Exception {
        JsonMapper mapper = JsonMapper.builder().build();
        System.out.println("jackson: " + mapper.writeValueAsString(Map.of("ok", true)));

        System.out.println("commons-compress archive formats: "
                + ArchiveStreamFactory.detectAvailableArchiveInputStreamProviders().keySet());
        System.out.println("commons-compress compressor formats: "
                + CompressorStreamFactory.getSingleton().getInputStreamCompressorNames());
    }
}
