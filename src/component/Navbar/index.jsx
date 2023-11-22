// Navbar.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import thư viện Link
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [token, setToken] = useState(localStorage.getItem("accessToken"));
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setToken(null);
  };

  const handleSearch = () => {
    fetch(`http://localhost:8080/getPost`)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data);
        const results = data.filter((item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchResults(results);
      })
      .catch((error) => {
        console.error("Lỗi khi gọi API:", error);
      });
  };

  useEffect(() => {
    handleSearch();
  }, [searchQuery]);

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
      <div>
        <div className={styles.search_box}>
          <input
            type="text"
            className={styles.search_input}
            placeholder="Tìm kiếm..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div
          className={styles.search_results}
          style={{ display: searchQuery && searchResults.length > 0 ? "flex" : "none" }}>
          <ul>
            {searchResults.map((result, index) => (
              <li key={index}>
                {/* Sử dụng thẻ Link để điều hướng đến trang chi tiết */}
                <Link to={`/post/${result.postId}`} className={styles.link_style_result}>
                  <img src={result.img} alt={result.title} />
                  {result.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
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
    </nav>
  );
};

export default Navbar;
