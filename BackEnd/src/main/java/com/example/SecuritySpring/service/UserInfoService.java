package com.example.SecuritySpring.service;

import com.example.SecuritySpring.config.UserInfoUserDetails;
import com.example.SecuritySpring.model.UserInfo;
import com.example.SecuritySpring.repository.UserInfoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserInfoService implements UserDetailsService {
    @Autowired
    private PasswordEncoder encoder;
    @Autowired
    UserInfoRepository repository;
    @Autowired
    public UserInfoService(UserInfoRepository usersRepository) {
        this.repository = usersRepository;
    }
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<UserInfo> userInfo = repository.findByName(username);
        return userInfo.map(UserInfoUserDetails::new)
                .orElseThrow(() -> new UsernameNotFoundException("user not found " + username));

    }
    public UserInfo addUser(UserInfo userInfo) {
        userInfo.setPassword(encoder.encode(userInfo.getPassword()));
        repository.save(userInfo);
        return userInfo;
    }
    public List<UserInfo> getAll() {
        return repository.findAll();
    }
    public void deleteUserById(Integer userId) {
        repository.deleteById(Long.valueOf(userId));
    }
}
