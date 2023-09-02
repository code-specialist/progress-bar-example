package com.codespecialist.sseprogressbarbackend.adapter.controller;

import com.codespecialist.sseprogressbarbackend.application.send_sequence.model.ProgressResponseModel;
import com.google.gson.Gson;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

@RestController
@RequestMapping("/progress")
@CrossOrigin("*")
public class ProgressbarController {
    private final Gson gson;

    public ProgressbarController() {
        this.gson = new Gson();
    }

    @GetMapping("/progressbar")
    public ResponseEntity<SseEmitter> getAndCreateProgress(){
        SseEmitter sseEmitter = new SseEmitter();

        ExecutorService executorService = Executors.newSingleThreadExecutor();
        executorService.execute(() -> this.createAndGetSequence(sseEmitter));

        return new ResponseEntity<>(sseEmitter, HttpStatus.OK);
    }

    private void createAndGetSequence(SseEmitter sseEmitter) {
        for (int i = 1; i <= 10 ; i++) {
            try {
                sseEmitter.send(gson.toJson(new ProgressResponseModel(i, 10)).replaceAll("\n", ""));
                Thread.sleep(500);
            } catch (IOException | InterruptedException e) {
                throw new RuntimeException(e);
            }
        }
        sseEmitter.complete();
    }

}
