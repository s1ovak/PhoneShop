package com.s1ovak.phoneshop.backend.service;

import com.s1ovak.phoneshop.backend.dto.CartDto;
import com.s1ovak.phoneshop.backend.dto.CartItemDto;

public interface CartService {
    void addToCart(CartItemDto cartItem);
    CartDto getCart(Integer userId);
    void deleteCartItem(Integer userId, Integer productId);
}
