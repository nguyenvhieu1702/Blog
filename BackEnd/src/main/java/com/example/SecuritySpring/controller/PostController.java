package com.example.SecuritySpring.controller;

import com.example.SecuritySpring.model.Post;
import com.example.SecuritySpring.model.UserInfo;
import com.example.SecuritySpring.service.PostService;
import com.example.SecuritySpring.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping
public class PostController {

    @Autowired
    PostService postService;
    @Autowired
    UserService userService;
    @GetMapping("/getPost/{id}")
    public Optional<Post> getPost(@PathVariable Long id){
        return postService.getPost(id);
    }

    @GetMapping("/getPost")
    public List<Post> getAllPost(){
        return postService.getAll();
    }
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @DeleteMapping("/deletePost/{postId}")
    public void deletePost(@PathVariable Long postId) {
        postService.deletePostById(postId);
    }



    @PostMapping("/createPost")
    public String createPost(@RequestBody Post post, @AuthenticationPrincipal UserDetails userDetails){
        UserInfo userInfo = userService.getName(userDetails.getUsername());
        post.setUser(userInfo);
        postService.save(post);
        return null;
    }
}
