package com.s1ovak.phoneshop.backend.repository;

import com.s1ovak.phoneshop.backend.entity.Product;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends CrudRepository<Product, Integer> {
    List<Product> findAllByPriceIsNotNullAndQuantityGreaterThan(Integer quantity);
    Product findProductById(Integer id);
}
