package com.s1ovak.phoneshop.backend.service;

import com.s1ovak.phoneshop.backend.entity.Product;

import java.util.List;

public interface ProductService {
    List<Product> findProducts(String query, String sort, String order);
    List<Product> findProducts(String query, List<Product> validProducts);
    Product getProductById(Integer id);
    List<Product> getLastViewed(List<Integer> ids);
}
