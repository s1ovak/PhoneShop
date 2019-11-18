package com.s1ovak.phoneshop.backend.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "product")
@Data
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "description")
    private String description;

    @Column(name="price")
    private Integer price;

    @Column(name = "quantity")
    private Integer quantity;
}
