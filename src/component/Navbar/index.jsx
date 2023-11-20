import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [token, setToken] = useState(localStorage.getItem("accessToken"));
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState();

  const handleLogout = () => {
    // Xóa token khỏi localStorage
    localStorage.removeItem("accessToken");
    // Cập nhật state token
    setToken(null);
  };

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const response = await fetch('http://localhost:8080/getPost');
        const data = await response.json();
        console.log(data);
        setSearchResults(data);
      } catch (error) {
        console.error('Lỗi khi gọi API:', error);
      }
    };

    fetchAllPosts();
  }, []);


  const handleSearch = () => {
    const results = searchResults.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
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
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      <div className={styles.search_results}>
        {searchQuery.length > 0 && (
          <ul>
            {searchResults.map((result, index) => (
              <li key={index}>{result.title}</li>
            ))}
          </ul>
        )}
      
        
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
