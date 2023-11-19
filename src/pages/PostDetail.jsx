import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import NavbarCreate from "../component/NavBarCreate";
import "bootstrap/dist/css/bootstrap.min.css";

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
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8080/getPost/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setData(data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <main>
      <NavbarCreate />

      <div style={styles.container}>
        <div style={styles.imgWrapper}>
          <img
            style={styles.img}
            src={data.img}
            alt="blog"
          />
        </div>
        <h2>Author: {data.author}</h2>
        <h2>Created at: {data.createAt}</h2>
        <p style={{ padding: "0 100px" }}>
          <div dangerouslySetInnerHTML={{ __html: data.body }} />
        </p>
      </div>
    </main>
  );
};

export default PostDetail;
