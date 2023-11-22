import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserManager from '../component/Manager/UserManager';
import styles from '../component/Manager/Manager.module.css'
import PostManager from '../component/Manager/PostManager';

function Manager() {
    const [selectedTab, setSelectedTab] = useState('user'); // Mặc định chọn tab 'user'
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        loadDataProfile();
    }, []);

    const loadDataProfile = () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("accessToken"));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/Profile/me", requestOptions)
            .then(response => response.json())
            .then(result => {
                setUser(result);
                // if (!result.roles.includes("ROLE_ADMIN")) {
                //     navigate('/'); // Chuyển hướng về trang chính hoặc trang khác nếu cần
                // }
            })
            .catch(error => {
                console.log('error', error)
                navigate('/')
            });
    }

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        navigate('/');
    };

    return (
        <div className={styles.Container}>
            <div className={styles.sideBar}>

                <div className={styles.subtitlesideBar}>Quản lý Website</div>

                <button
                    className={`${styles.funcSidebar} ${selectedTab === 'user' ? styles.selectedButton : ''}`}
                    onClick={() => handleTabClick('user')}>
                    <div className={styles.iconUser}></div>
                    <div className={styles.element}>
                        <p>Người dùng</p>
                    </div>
                </button>

                <button
                    className={`${styles.funcSidebar} ${selectedTab === 'post' ? styles.selectedButton : ''}`}
                    onClick={() => handleTabClick('post')}>
                    <div className={styles.iconPost}></div>
                    <div className={styles.element}>
                        <p>Bài viết</p>
                    </div>
                </button>

                <button className={styles.funcLogout} onClick={handleLogout}>
                    <div className={styles.iconPost}></div>
                    <div className={styles.element}>
                        <p>Đăng xuất</p>
                    </div>
                </button>
            </div>
            <div className={styles.contentInner}>{selectedTab === 'user' ? <UserManager /> : <PostManager />}</div>
        </div>
    );
}

export default Manager;
