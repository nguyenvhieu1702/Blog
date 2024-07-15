package com.example.SecuritySpring.controller;

import com.example.SecuritySpring.model.AuthRequest;
import com.example.SecuritySpring.model.UserInfo;
import com.example.SecuritySpring.repository.UserInfoRepository;
import com.example.SecuritySpring.service.JwtService;
import com.example.SecuritySpring.service.UserInfoService;
import com.example.SecuritySpring.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    private final JwtService jwtService;
    @Autowired
    private AuthenticationManager authenticationManager;

    private final UserService userService;
    private final UserInfoService userInfoService;
    private final UserInfoRepository userInfoRepository;

    @PostMapping("/createUser")
    public UserInfo addUser(@RequestBody UserInfo userInfo) {
        return userInfoService.addUser(userInfo);
    }
    @GetMapping("/getUser")
    public List<UserInfo> getAllUser(){
        return userInfoService.getAll();
    }
    @GetMapping("/Profile/me")
    public Optional<UserInfo> Profile(Principal principal) {
        String username = principal.getName();
        Optional<UserInfo> user = userInfoRepository.findByName(username);
        return user;
    }
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @DeleteMapping("/deleteUser/{userId}")
    public void deleteUser(@PathVariable Long userId) {
        userInfoService.deleteUserById(Math.toIntExact(userId));
    }

    //
    @PostMapping("/generateToken")
    public String authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
        if (authentication.isAuthenticated()) {
            return jwtService.generateToken(authRequest.getUsername());
        } else {
            throw new UsernameNotFoundException("invalid user request !");
        }
    }






}
