package com.s1ovak.phoneshop.backend.dto;

import lombok.Data;

@Data
public class OrderDto {
    private CartDto cart;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String address;
}
