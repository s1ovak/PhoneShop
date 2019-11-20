package com.s1ovak.phoneshop.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "cart")
@Data
public class Cart {
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

    public Cart(User user, Product product, Integer cartQuantity) {
        this.user = user;
        this.product = product;
        this.cartQuantity = cartQuantity;
    }

    public Cart() {
    }
}
