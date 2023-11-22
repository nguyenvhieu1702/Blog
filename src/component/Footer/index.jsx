import React from "react";
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.footer_content}>
        <div className={styles.footer_section}>
          <h3>Thông tin liên hệ</h3>
          <p>Địa chỉ: 123 Đường ABC, Thành phố XYZ</p>
          <p>Email: 20h1120126@ut.edu.vn</p>
        </div>

        <div className={styles.footer_section}>
        </div>
      </div>

      <div className={styles.footer_bottom}>
        <p>&copy; 2023 Tên Công Ty. Bảo lưu mọi quyền.</p>
      </div>
    </footer>
  );
}

export default Footer;
