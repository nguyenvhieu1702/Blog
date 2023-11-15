import React from "react";
import styles from "./PostCard.module.css";
import { Link } from "react-router-dom";
import { IoMdTime } from "react-icons/io";
import { FaRegUser, FaRegCommentAlt } from "react-icons/fa";

const PostCard = ({ data }) => {
  const {
    title = "",
    img = "",
    time = "",
    author = "",
    content = "",
    id = "",
  } = data;
  console.log(data);

  return (
    <Link to={`/post/${id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div className={styles.container}>
        <h1>{title}</h1>
        <div className={styles.sub_info_wrapper}>
          <p className={styles.center}>
            <IoMdTime /> {time} by
          </p>
          <p className={styles.center}>
            <a href="/" className={styles.link_decord}>
              {" "}
              <FaRegUser /> {author}
            </a>
          </p>
          <p className={styles.center}>
            <a href="/" className={styles.link_decord}>
              <FaRegCommentAlt /> Để lại bình luận
            </a>
          </p>
        </div>
        <div className={styles.content_wrapper}>
          <div className={styles.image_wrapper}>
            <img src={img} alt="blog" />
          </div>
          <p className={styles.description}>{content}</p>
        </div>
        <hr />
      </div>
    </Link>
  );
};

export default PostCard;
