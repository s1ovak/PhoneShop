package com.s1ovak.phoneshop.backend.service.impl;

import com.s1ovak.phoneshop.backend.entity.AuthToken;
import com.s1ovak.phoneshop.backend.entity.User;
import com.s1ovak.phoneshop.backend.securityConfig.JwtTokenUtil;
import com.s1ovak.phoneshop.backend.securityConfig.UserTokenModel;
import com.s1ovak.phoneshop.backend.service.AuthenticationService;
import com.s1ovak.phoneshop.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {
    private UserDetailsService userDetailsService;
    private AuthenticationManager authenticationManager;
    private JwtTokenUtil jwtTokenUtil;
    private UserService userService;

    @Autowired
    public AuthenticationServiceImpl(UserDetailsService userDetailsService, AuthenticationManager authenticationManager,
                                     JwtTokenUtil jwtTokenUtil, UserService userService) {
        this.userDetailsService = userDetailsService;
        this.authenticationManager = authenticationManager;
        this.jwtTokenUtil = jwtTokenUtil;
        this.userService = userService;
    }

    @Override
    public UserTokenModel login(User user) {
        try {
            Optional<User> temp = userService.getUserByUsername(user.getUsername());
            String token = getToken(user);
            return new UserTokenModel(temp.get(), new AuthToken(token));
        } catch (AuthenticationException ex){
            return null;
        }
    }

    @Override
    public UserTokenModel register(User user) {
        User temp = userService.saveUser(user);
        String token = getToken(user);
        return new UserTokenModel(temp, new AuthToken(token));
    }

    private String getToken(User user) {
        UserDetails userDetails = userDetailsService.loadUserByUsername(user.getUsername());

        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
                userDetails, user.getPassword(), userDetails.getAuthorities()
        );

        authenticationManager.authenticate(authenticationToken);

        if (authenticationToken.isAuthenticated())
            SecurityContextHolder.getContext().setAuthentication(authenticationToken);

        return jwtTokenUtil.generateToken(authenticationToken);
    }
}
