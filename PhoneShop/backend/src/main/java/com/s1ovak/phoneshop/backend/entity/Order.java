package com.s1ovak.phoneshop.backend.entity;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.DecimalMin;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "order")
@Data
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "total_price")
    private Integer totalPrice;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "address")
    private String address;

    @OneToMany
    @JoinColumn(name = "order_id")
    private List<OrderCart> cartItems;

    public Order(Integer totalPrice, String firstName, String lastName, String phoneNumber, String address, List<OrderCart> cartItems) {
        this.totalPrice = totalPrice;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.cartItems = cartItems;
    }

    public Order() {
        cartItems = new ArrayList<>();
    }
}
