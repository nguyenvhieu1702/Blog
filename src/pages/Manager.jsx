import React, { useState, useEffect } from "react";

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
      <ul>
        {posts.map((post) => (
          <li key={post.postId}>
            <p>Author: {post.author}</p>
            <p>Title: {post.title}</p>
            <button onClick={() => handleDeletePost(post.postId)}>Delete</button>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Manager
