package com.s1ovak.phoneshop.backend.securityConfig;

import com.s1ovak.phoneshop.backend.entity.AuthToken;
import com.s1ovak.phoneshop.backend.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserTokenModel {
    User user;
    AuthToken token;
}
