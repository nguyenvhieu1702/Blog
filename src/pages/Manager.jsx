import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Button } from "react-bootstrap"; // Import React Bootstrap components
import NavbarCreate from "../component/NavBarCreate";

function Manager() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost:8080/getPost")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setPosts(data);
      })
      .catch(error => console.error("Error fetching data:", error));
  };

  const handleDeletePost = (postId) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + localStorage.getItem("accessToken"));

    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(`http://localhost:8080/deletePost/${postId}`, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Xóa bài đăng từ state khi xóa thành công
        const updatedPosts = posts.filter(post => post.postId !== postId);
        setPosts(updatedPosts);
      })
      .catch(error => console.error('Error deleting post:', error));
  };

  return (
    <div>
      <NavbarCreate />
    <div className="container mt-5">
      <ul className="list-group">
        {posts.map((post) => (
          <li key={post.postId} className="list-group-item">
            <p className="mb-1">Author: {post.author}</p>
            <p className="mb-1">Title: {post.title}</p>
            <Button
              variant="danger"
              onClick={() => handleDeletePost(post.postId)}
            >
              Delete
            </Button>
            <hr />
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default Manager
