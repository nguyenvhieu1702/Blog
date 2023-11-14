import React from "react";
import PostCard from "../PostCard";
import styles from './PostList.module.css'

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
  return (
    <div className={styles.container}>
      {fakeData.map((item) => (
        <PostCard key={item.id} data={item}/>
      ))}
    </div>
  );
};

export default PostList;
