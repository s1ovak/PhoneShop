package com.s1ovak.phoneshop.backend.repository;

import com.s1ovak.phoneshop.backend.entity.Cart;
import com.s1ovak.phoneshop.backend.entity.Product;
import com.s1ovak.phoneshop.backend.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CartRepository extends CrudRepository<Cart, Integer> {
    List<Cart> findAllByUser(User user);
    Integer deleteByProductAndUser(Product product, User user);
    Cart getByUserAndProduct(User user, Product product);

}
