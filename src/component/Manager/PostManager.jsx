import React, { useState, useEffect } from "react";
import styles from './PostManager.module.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function PostManager() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        loadDataPost();
    }, []);

    const loadDataPost = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://localhost:8080/getPost", requestOptions)
            .then(response => response.json())
            .then(result => setPosts(result))
            .catch(error => console.log('error', error));
    }

    const handleDeletePost = (postId) => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("accessToken"));

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`http://localhost:8080/deletePost/${postId}`, requestOptions)
            .then(response => response.ok)
            .then(() => {
                // Xóa bài đăng khỏi mảng user.posts
                const updatedPosts = posts.filter(post => post.postId !== postId);
                setPosts(updatedPosts);
                toast.success("Xóa thành công", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000 // Thời gian hiển thị thông báo
                });
            })
            .catch(error => {
                console.log('error', error);
                toast.error("Xóa không thành công", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000 // Thời gian hiển thị thông báo
                });
            });
    }

    return (
        <div className={styles.container}>
            <ToastContainer />
            <h1 className={styles.header}>Quản lý bài đăng</h1>
            <table className={styles.userTable}>
                <thead>
                    <tr>
                        <th>Post ID</th>
                        <th>Tiêu đề</th>
                        <th>Tác giả</th>
                        <th>Ngày đăng</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post) => (
                        <tr key={post.postId} >
                            <td>{post.postId} </td>
                            <td>{post.title}</td>
                            <td>{post.author}</td>
                            <td>{post.createAt}</td>
                            <td className={styles.buttonContainer}>
                                <button className={styles.delButton} onClick={() => handleDeletePost(post.postId)}>
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PostManager;
