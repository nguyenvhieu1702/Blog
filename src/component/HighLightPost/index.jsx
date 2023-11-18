import { useEffect, useState } from "react";
import styles from "./HighLightPost.module.css";
import { Link } from "react-router-dom";

import { POST } from "../../data/postList";

const HighLightPost = () => {
  const [highlightPost, sethighLightPost] = useState(POST);

  useEffect(() => {}, []);

  return (
    <div className={styles.container}>
      <div className={styles.highlightTitleWrapper}>
        <h1 className={styles.highlightTitle}>Bài viết nổi bật</h1>
      </div>

      <div>
        {highlightPost.map((item) => {
          return (
            <>
              <HighLightItem data={item} key={item.id} />
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
};

const HighLightItem = ({ data }) => {
  const { title = "", img = "" } = data;
  return (
    <Link
      className={styles.postWrapper}
      style={{ textDecoration: "none", color: "inherit" }}
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
