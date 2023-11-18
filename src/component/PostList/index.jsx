
import PostCard from "../PostCard";
import styles from './PostList.module.css'
import React, { useState, useEffect } from 'react';


const PostList = () => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8080/getPost')
      .then(response => response.json())
      .then(data => {
        setBlog(data);
      })
      .catch(error => console.error('Error:', error));
  }, []);
  console.log(blog)
  return (
    <div className={styles.container}>
      {blog?.map((item) => (
        <PostCard key={item.id} data={item}/>
      ))}

    </div>
    
  );
};

export default PostList;
