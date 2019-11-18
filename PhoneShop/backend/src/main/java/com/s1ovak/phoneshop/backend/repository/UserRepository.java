package com.s1ovak.phoneshop.backend.repository;

import com.s1ovak.phoneshop.backend.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
    User findUserById(Integer id);
    Optional<User> findUserByUsername(String username);
}
