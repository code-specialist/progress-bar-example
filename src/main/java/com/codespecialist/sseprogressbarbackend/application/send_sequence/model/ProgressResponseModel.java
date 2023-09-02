package com.codespecialist.sseprogressbarbackend.application.send_sequence.model;


import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class ProgressResponseModel {
    private final int count;
    private final int maxCount;
}
