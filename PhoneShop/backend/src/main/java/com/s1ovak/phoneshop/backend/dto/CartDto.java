package com.s1ovak.phoneshop.backend.dto;

import com.s1ovak.phoneshop.backend.entity.Product;
import com.s1ovak.phoneshop.backend.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
public class CartDto {
    User user;
    List<Product> products;
    List<Integer> quantities;

    public CartDto() {
        products = new ArrayList<>();
        quantities = new ArrayList<>();
    }
}
