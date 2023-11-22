import React, { useEffect, useState } from 'react';
import styles from './HighLightPost.module.css';
import { Link } from 'react-router-dom';

const HighLightPost = () => {
  const [highlightPost, setHighLightPost] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/getPost')
      .then(response => response.json())
      .then(data => {
        const currentPosts = [...highlightPost, ...data];
        const limitedPosts = currentPosts.slice(-4); // Giữ lại tối đa 4 bài viết
        setHighLightPost(limitedPosts);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.highlightTitleWrapper}>
        <h1 className={styles.highlightTitle}>Bài viết mới </h1>
      </div>

      <div>
        {highlightPost.map(item => (
          <React.Fragment key={item.id}>
            <HighLightItem data={item} />
            <hr />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const HighLightItem = ({ data }) => {
  const { title = '', img = '', postId } = data;
  return (
    <Link
      to={`/post/${postId}`}
      className={styles.postWrapper}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div className={styles.imgWrapper}>
        <img src={img} alt="blog" />
      </div>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </Link>
  );
};

export default HighLightPost;
