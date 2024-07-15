package com.example.SecuritySpring.service;

import com.example.SecuritySpring.model.Post;
import com.example.SecuritySpring.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
@Service
public class PostService {

    @Autowired
    PostRepository postRepository;

    public Optional<Post> getPost(Long id){
        return postRepository.findById(id);
    }

    public List<Post> getAll(){
        return postRepository.findAll();
    }

    public Post save(Post post){
        if(post.getPostId()==null)
            post.setCreateAt(LocalDate.now());
        return postRepository.save(post);
    }

    public void deletePostById(Long postId) {
        postRepository.deleteById(postId);
    }


}







