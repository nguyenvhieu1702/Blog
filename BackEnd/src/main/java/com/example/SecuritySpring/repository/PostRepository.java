package com.example.SecuritySpring.repository;

import com.example.SecuritySpring.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post,Long> {

}
