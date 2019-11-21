package com.s1ovak.phoneshop.backend.controller;

import com.s1ovak.phoneshop.backend.entity.User;
import com.s1ovak.phoneshop.backend.securityConfig.UserTokenModel;
import com.s1ovak.phoneshop.backend.service.AuthenticationService;
import com.s1ovak.phoneshop.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/authentication")
public class AuthenticationController {
    private final AuthenticationService authenticationService;
    private final UserService userService;

    @Autowired
    public AuthenticationController(AuthenticationService authenticationService, UserService userService) {
        this.authenticationService = authenticationService;
        this.userService = userService;
    }

    @PostMapping(value = "/login")
    public UserTokenModel login(@RequestBody User loginUser) {
        return authenticationService.login(loginUser);
    }

    @PostMapping(value = "/register")
    public UserTokenModel register(@RequestBody User registerUser) {
        return authenticationService.register(registerUser);
    }
}
