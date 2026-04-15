package com.example.app;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import org.apache.commons.text.CaseUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Map;

public final class App {

    private static final Logger log = LoggerFactory.getLogger(App.class);

    public static void main(String[] args) throws Exception {
        String camel = CaseUtils.toCamelCase("sample gradle app", false, ' ');
        log.info("commons-text: {}", camel);

        var mapper = new ObjectMapper();
        log.info("jackson: {}", mapper.writeValueAsString(Map.of("ok", true)));

        log.info("gson: {}", new Gson().toJson(Map.of("ok", true)));
    }
}
