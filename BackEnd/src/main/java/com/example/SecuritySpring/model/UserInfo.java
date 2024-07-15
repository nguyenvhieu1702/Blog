package com.example.SecuritySpring.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity // dùng để khai báo với Spring Boot rằng đây là 1 entity biểu diễn table trong db
@Data // annotation này sẽ tự động khai báo getter và setter cho class
@AllArgsConstructor // dùng để khai báo constructor với tất cả các properties
@NoArgsConstructor // dùng để khai báo constructor rỗng không có param
@Table(name = "user")
public class UserInfo {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private int userId;
    private String name;
    private String email;
    private String password;
    private String roles;
    @JsonIgnore
    @OneToMany(mappedBy = "userInfo",cascade = CascadeType.ALL)
    private List<Post> posts;

}