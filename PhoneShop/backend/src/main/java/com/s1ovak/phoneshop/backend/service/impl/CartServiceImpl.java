package com.s1ovak.phoneshop.backend.service.impl;

import com.s1ovak.phoneshop.backend.dto.CartDto;
import com.s1ovak.phoneshop.backend.dto.CartItemDto;
import com.s1ovak.phoneshop.backend.dto.OrderDto;
import com.s1ovak.phoneshop.backend.entity.*;
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
        if (cart == null) {
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

        Integer totalPrice = 0;

        for (Cart cart : carts) {
            Product product = cart.getProduct();
            product.setQuantity(cart.getCartQuantity());
            cartDto.getProducts().add(product);
            totalPrice += cart.getProduct().getPrice() * cart.getCartQuantity();
        }

        cartDto.setTotalPrice(totalPrice);
        cartDto.setUser(user);
        return cartDto;
    }

    @Override
    @Transactional
    public void deleteCartItem(Integer userId, Integer productId) {
        User user = userService.getUserById(userId).get();
        Product product = productService.getProductById(productId);

        cartRepository.deleteByProductAndUser(product, user);
    }

    @Override
    @Transactional
    public void placeOrder(OrderDto orderDto) {
        for(Product product: orderDto.getCart().getProducts()) {
            cartRepository.deleteByProductAndUser(product, orderDto.getCart().getUser());
        }



        /*Order order = new Order();

        order.setTotalPrice(orderDto.getCart().getTotalPrice());
        order.setFirstName(orderDto.getFirstName());
        order.setLastName(orderDto.getLastName());
        order.setPhoneNumber(orderDto.getPhoneNumber());
        order.setAddress(orderDto.getAddress());

        for (int i = 0; i < orderDto.getCart().getProducts().size(); i++) {
            order.getCartItems().add(new OrderCart(
                    orderDto.getCart().getUser(),
                    orderDto.getCart().getProducts().get(i);
                    orderDto.getCart().getProducts().get(i).getQuantity();
            ));
        }*/
    }
}
