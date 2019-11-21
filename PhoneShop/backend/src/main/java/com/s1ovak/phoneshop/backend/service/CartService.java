package com.s1ovak.phoneshop.backend.service;

import com.s1ovak.phoneshop.backend.dto.CartDto;
import com.s1ovak.phoneshop.backend.dto.CartItemDto;
import com.s1ovak.phoneshop.backend.dto.OrderDto;

public interface CartService {
    void addToCart(CartItemDto cartItem);
    CartDto getCart(Integer userId);
    void deleteCartItem(Integer userId, Integer productId);
    void placeOrder(OrderDto orderDto);
}
