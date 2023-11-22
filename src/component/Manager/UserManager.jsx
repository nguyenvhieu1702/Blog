import React, { useState, useEffect } from "react";
import styles from './UserManager.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UserManager() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadDataUser();
    }, []);

    const loadDataUser = () => {
        fetch("http://localhost:8080/getUser")
            .then(response => response.json())
            .then(result => {
                
                setUsers(result);
            })
            .catch(error => console.log('error', error));
    }

    const handleDeleteUser = (iduser) => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("accessToken"));

        const requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`http://localhost:8080/deleteUser/${iduser}`, requestOptions)
            .then(response => response.ok)
            .then(() => {
                const updatedUsers = users.filter(user => user.userId !== iduser);
                setUsers(updatedUsers);
                toast.success("Xóa thành công", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000 // Thời gian hiển thị thông báo
                });
            })
            .catch(error => {
                console.log('error', error);
                toast.error("Xóa không thành công", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000 // Thời gian hiển thị thông báo
                });
            });
    }

    return (
        <div className={styles.container}>
            <ToastContainer />
            <h1 className={styles.header}>Quản lý người dùng</h1>
            <table className={styles.userTable}>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Người dùng</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.userId}>
                            <td>{user.userId}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.roles}</td>
                            <td className={styles.buttonContainer}>
                                <button className={styles.delButton} onClick={() => handleDeleteUser(user.userId)}>
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserManager;
