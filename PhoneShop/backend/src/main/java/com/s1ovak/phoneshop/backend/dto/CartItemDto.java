package com.s1ovak.phoneshop.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CartItemDto {
    Integer userId;
    Integer productId;
    Integer quantity;
}
