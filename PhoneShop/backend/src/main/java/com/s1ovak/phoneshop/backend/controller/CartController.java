package com.s1ovak.phoneshop.backend.controller;

import com.s1ovak.phoneshop.backend.dto.CartDto;
import com.s1ovak.phoneshop.backend.dto.CartItemDto;
import com.s1ovak.phoneshop.backend.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart")
public class CartController {
    private CartService cartService;

    @Autowired
    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    @PostMapping(value = "/add")
    public void addToCart(@RequestBody CartItemDto cartItemDto) {
        cartService.addToCart(cartItemDto);
    }

    @GetMapping
    public CartDto getCart(@RequestParam(name = "userId") Integer userId) {
        return cartService.getCart(userId);
    }

    @PostMapping(value = "/delete")
    public void deleteCartItem(
            @RequestParam(name = "userId") Integer userId,
            @RequestParam(name = "productId") Integer productId
    ) {
        cartService.deleteCartItem(userId, productId);
    }
}
