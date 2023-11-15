
import PostCard from "../PostCard";
import styles from './PostList.module.css'
import React, { useState, useEffect } from 'react';

const fakeData = [
  {
      id: 1,
      title: "Javascript",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      time: "13/11/2023",
      author: "Nguyễn Văn Hiếu",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi lorem"
  },
  {
      id: 2,
      title: "Javascript",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      time: "13/11/2023",
      author: "Nguyễn Văn Hiếu",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi loe"
  },
  {
      id: 3,
      title: "Javascript",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      time: "13/11/2023",
      author: "Nguyễn Văn Hiếu",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi lorem"
  },

]

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
      {fakeData?.map((item) => (
        <PostCard key={item.id} data={item}/>
      ))}
    </div>
  );
};

export default PostList;
