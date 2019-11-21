package com.s1ovak.phoneshop.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "order_cart")
@Data
public class OrderCart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @Column(name = "cart_quantity")
    private Integer cartQuantity;

    public OrderCart(User user, Product product, Integer cartQuantity) {
        this.user = user;
        this.product = product;
        this.cartQuantity = cartQuantity;
    }

    public OrderCart() {
    }
}
