package com.example.SecuritySpring.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import org.hibernate.annotations.Columns;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "post")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long postId;
    private String title;
    private String img;
    @Column(columnDefinition="longtext")
    private String body;

    @Column(columnDefinition="longtext")
    private String content;
    private LocalDate createAt;
    private String author;






    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserInfo userInfo;


    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getContent() {
        return content;
    }

    public LocalDate getCreateAt() {
        return createAt;
    }

    public void setCreateAt(LocalDate createAt) {
        this.createAt = createAt;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Long getPostId() {
        return postId;
    }

    public void setPostId(Long postId) {
        this.postId = postId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }





    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

//    @Override
//    public String toString() {
//        return "Post{" +
//                "postId=" + postId +
//                ", title='" + title + '\'' +
//                ", img='" + img + '\'' +
//                ", body='" + body + '\'' +
//                ", content='" + content + '\'' +
//                ", userInfo=" + userInfo +
//                '}';
//    }

    public UserInfo getUser() {
        return userInfo;
    }

    public void setUser(UserInfo userInfo) {
        this.userInfo = userInfo;
    }
}
