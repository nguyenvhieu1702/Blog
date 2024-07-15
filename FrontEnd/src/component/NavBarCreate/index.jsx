import React from "react";
import styles from "./NavbarCreate.module.css";

const NavbarCreate = () => {
    return (
      <nav className={styles.container}>
        <div className={styles.action_wrapper}>
        <ul className={styles.action_list}>
          <li>
            <a href="/" className={styles.link_style}>
              Trang chủ
            </a>
          </li>
        </ul>
        </div>
      </nav>
    );
  };
  
  export default NavbarCreate;
  