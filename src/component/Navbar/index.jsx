import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.action_wrapper}>
        <ul className={styles.action_list}>
          <li>
            <a href="/" className={styles.link_style}>
              Chính sách bảo mật
            </a>
          </li>
          <li>
            <a href="/" className={styles.link_style}>
              Giới thiệu
            </a>
          </li>
          <li>
            <a href="/" className={styles.link_style}>
              Liên hệ
            </a>
          </li>
          <li>
            <a href="/" className={styles.link_style}>
              Câu hỏi thường gặp (FAQ)
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.auth_wrapper}>
      <ul className={styles.action_list}>
          <li>
            <a href="/" className={styles.link_style}>
              Đăng ký
            </a>
          </li>
          <li>
            <a href="/" className={styles.link_style}>
              Đăng nhập
            </a>
          </li>
          </ul>
      </div>
    </nav>
  );
};

export default Navbar;