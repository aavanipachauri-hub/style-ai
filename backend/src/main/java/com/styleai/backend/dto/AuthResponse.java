package com.styleai.backend.dto;

public record AuthResponse(
        Long id,
        String name,
        String email
) {
}