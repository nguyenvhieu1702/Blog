package com.example.SecuritySpring.service;


import com.example.SecuritySpring.model.UserInfo;
import com.example.SecuritySpring.repository.UserInfoRepository;
import org.hibernate.mapping.List;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public record UserService(UserInfoRepository repository,
                          PasswordEncoder passwordEncoder) {
    public String addUser(UserInfo userInfo) {
        userInfo.setPassword(passwordEncoder.encode(userInfo.getPassword()));
        repository.save(userInfo);
        return "Thêm user thành công!";
    }
    public  UserInfo getName(String username){
        return repository.findByName(username).orElse(null);
    }

}

