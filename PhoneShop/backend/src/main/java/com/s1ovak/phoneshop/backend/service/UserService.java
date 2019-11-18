package com.s1ovak.phoneshop.backend.service;

import com.s1ovak.phoneshop.backend.entity.User;

import java.util.Optional;

public interface UserService {
    Optional<User> getUserById(Integer id);
    Optional<User> getUserByUsername(String username);
    User saveUser(User user);
    void deleteUser(Integer id);
}
