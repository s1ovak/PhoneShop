package com.s1ovak.phoneshop.backend.service.impl;

import com.s1ovak.phoneshop.backend.dto.CartDto;
import com.s1ovak.phoneshop.backend.dto.CartItemDto;
import com.s1ovak.phoneshop.backend.entity.Cart;
import com.s1ovak.phoneshop.backend.entity.Product;
import com.s1ovak.phoneshop.backend.entity.User;
import com.s1ovak.phoneshop.backend.repository.CartRepository;
import com.s1ovak.phoneshop.backend.repository.ProductRepository;
import com.s1ovak.phoneshop.backend.service.CartService;
import com.s1ovak.phoneshop.backend.service.ProductService;
import com.s1ovak.phoneshop.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CartServiceImpl implements CartService {
    private final CartRepository cartRepository;
    private final UserService userService;
    private final ProductService productService;

    @Autowired
    public CartServiceImpl(CartRepository cartRepository, UserService userService, ProductService productService) {
        this.cartRepository = cartRepository;
        this.userService = userService;
        this.productService = productService;
    }

    @Override
    public void addToCart(CartItemDto cartItem) {
        User user = userService.getUserById(cartItem.getUserId()).get();
        Product product = productService.getProductById(cartItem.getProductId());

        Cart cart = cartRepository.getByUserAndProduct(user, product);
        if(cart == null) {
            cartRepository.save(new Cart(user, product, cartItem.getQuantity()));
        } else {
            cart.setCartQuantity(cart.getCartQuantity() + cartItem.getQuantity());
            cartRepository.save(cart);
        }
    }

    @Override
    public CartDto getCart(Integer userId) {
        CartDto cartDto = new CartDto();
        User user = userService.getUserById(userId).get();

        List<Cart> carts = cartRepository.findAllByUser(user);

        carts.forEach(cart -> {
            cartDto.getProducts().add(cart.getProduct());
            cartDto.getQuantities().add(cart.getCartQuantity());
        });

        cartDto.setUser(user);

        return cartDto;
    }

    @Override
    @Transactional
    public void deleteCartItem(Integer userId, Integer productId) {
        User user = userService.getUserById(userId).get();
        Product product  = productService.getProductById(productId);

        cartRepository.deleteByProductAndUser(product, user);
    }
}
