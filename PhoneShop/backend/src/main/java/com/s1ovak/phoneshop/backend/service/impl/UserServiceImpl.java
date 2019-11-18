package com.s1ovak.phoneshop.backend.service.impl;

import com.s1ovak.phoneshop.backend.entity.User;
import com.s1ovak.phoneshop.backend.repository.UserRepository;
import com.s1ovak.phoneshop.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    private UserRepository userRepository;
    private BCryptPasswordEncoder encoder;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, BCryptPasswordEncoder encoder) {
        this.userRepository = userRepository;
        this.encoder = encoder;
    }

    @Override
    public Optional<User> getUserById(Integer id) {
        return userRepository.findById(id);
    }

    @Override
    public Optional<User> getUserByUsername(String username) {
        return userRepository.findUserByUsername(username);
    }

    @Override
    public User saveUser(User user) {
        Optional<User> temp = userRepository.findUserByUsername(user.getUsername());

        if (user.getId() != null || !temp.isPresent()) {
            user.setPassword(encoder.encode(user.getPassword()));
            return userRepository.save(user);
        } else return null;
    }

    @Override
    public void deleteUser(Integer id) {
        userRepository.deleteById(id);
    }
}
