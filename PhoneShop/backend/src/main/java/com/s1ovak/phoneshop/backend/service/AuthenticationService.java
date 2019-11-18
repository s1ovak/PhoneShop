package com.s1ovak.phoneshop.backend.service;

import com.s1ovak.phoneshop.backend.entity.User;
import com.s1ovak.phoneshop.backend.securityConfig.UserTokenModel;

public interface AuthenticationService {
    UserTokenModel login(User user);
    UserTokenModel register(User user);
}
