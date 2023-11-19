// Navbar.jsx
import { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [token,setToken] = useState(localStorage.getItem('accessToken'))
  const handleLogout = () => {
    // Xóa token khỏi localStorage
    localStorage.removeItem('accessToken');
    // Cập nhật state token
    setToken(null);
  };

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
       <div className={styles.search_box}>
        <input
          type="text"
          className={styles.search_input}
          placeholder="Tìm kiếm..."
        />
      </div>
      {token ? (
  <div className={styles.auth_wrapper}>
    <ul className={styles.action_list}>
      <li>
        <a href="/CreatePost" className={styles.link_style}>
          Tạo bài viết
        </a>
      </li>
      <li>
        <a onClick={handleLogout} className={styles.link_style}>
          Đăng xuất
          
        </a>
      </li>
      
    </ul>
  </div>
) : (
  <div className={styles.auth_wrapper}>
    <ul className={styles.action_list}>
      <li>
        <a href="/Register" className={styles.link_style}>
          Đăng ký
        </a>
      </li>
      <li>
        <a href="/Login" className={styles.link_style}>
          Đăng nhập
        </a>
      </li>
    </ul>
  </div>
)}

      {/* <div className={styles.auth_wrapper}>
        <ul className={styles.action_list}>
          <li>
            <a href="/" className={styles.link_style}>
              Đăng ký
            </a>
          </li>
          <li>
            <a href="/Login" className={styles.link_style}>
              Đăng nhập
            </a>
          </li>
        </ul>
      </div> */}
    </nav>
  );
};

export default Navbar;
