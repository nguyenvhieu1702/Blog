import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import NavbarCreate from "../component/NavBarCreate";
import "bootstrap/dist/css/bootstrap.min.css";
import HighLightPost from "../component/HighLightPost";
import Footer from '../component/Footer';

const styles = {
  mainContainer: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "1200px", // Adjust as needed
    margin: "0 auto",
    paddingTop: "16px", // Add top padding
  },
  postContainer: {
    flex: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  postContent: {
    width: "100%", // Adjust as needed
    padding: "0 16px",
    marginTop: "16px", // Add top margin
  },
  authorCreatedContainer: {
    display: "flex",
    width: "100%", // Adjust as needed
  },
  heading: {
    fontSize: "14px", // Adjust font size
    color: "#333",
    marginLeft: "20px",
  },
  sidebar: {
    width: "300px",
    flex: 1,
    marginLeft: "16px",
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
        console.log(data);
        setData(data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <NavbarCreate />
      <main style={styles.mainContainer}>
        <div style={styles.postContainer}>
          <div style={styles.imgWrapper}></div>
          <div style={styles.authorCreatedContainer}>
            <h2 style={styles.heading}>Tác giả: {data.author}</h2>
            <h2 style={styles.heading}>Ngày đăng: {data.createAt}</h2>
          </div>
          <div style={styles.postContent}>
            <p dangerouslySetInnerHTML={{ __html: data.body }} />
          </div>
        </div>

        <div style={styles.sidebar}>
          <HighLightPost />
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default PostDetail;
