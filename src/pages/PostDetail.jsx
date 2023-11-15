import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../component/Navbar";
import { useState } from "react";
import { useEffect } from "react";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
  },
  imgWrapper: {
    width: "300px",
    height: "250px",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  heading: {
    fontSize: "24px",
    color: "#333",
  },
  title: {
    textAlign: "center",
    fontSize: "5.5em",
  },
};

const PostDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState({
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
    author: 'Nguyễn Văn Hiếu',
    time: '13/11/2023',
    content: "Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor  ipsum dolor "
  })

  useEffect(() => {
    //call api
  }, [])

  return (
    <main>
      <Navbar />

      <div style={styles.container}>
        <h1 style={styles.title}>Javascript</h1>
        <div style={styles.imgWrapper}>
          <img
            style={styles.img}
            src={data.img}
            alt="blog"
          />
        </div>
        <h2>Author: {data.author}</h2>
        <h2>Created at: {data.time}</h2>
        <p style={{ padding: "0 100px" }}>
          <span style={{ fontWeight: "bold" }}>Content</span>: {data.content} 
        </p>
      </div>
    </main>
  );
};

export default PostDetail;
