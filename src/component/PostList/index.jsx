import PostCard from "../PostCard";
import styles from './PostList.module.css';
import React, { useState, useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';

const PostList = () => {
  const [blog, setBlog] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  useEffect(() => {
    fetch('http://localhost:8080/getPost')
      .then(response => response.json())
      .then(data => {
        setBlog(data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blog.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className={styles.container}>
      {currentPosts.map((item) => (
        <PostCard key={item.id} data={item}/>
      ))}
      <div className="d-flex justify-content-center mt-3">
        <Pagination>
          {Array.from({ length: Math.ceil(blog.length / postsPerPage) }).map((_, index) => (
            <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
    </div>
  );
};

export default PostList;
