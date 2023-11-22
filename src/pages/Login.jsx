import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import NavbarCreate from "../component/NavBarCreate";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from '../component/Footer';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      setIsLoggedIn(true);
      navigate("/")
      
      // Nếu có thông tin đăng nhập, điều hướng người dùng trực tiếp đến trang chủ
    }
  }, []);

  
  
  const handleUserSubmit = () => {

    const user = JSON.stringify({
      username: username,
      password: password,
    });

    fetch('http://localhost:8080/generateToken', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: user,
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        localStorage.setItem("accessToken", data);
        // setIsLoggedIn(true);
        navigate('/');
      })
      .catch((error) => console.error("Error:", error));
      localStorage.setItem('author',username)
    console.log("Tên người dùng:", username);
    console.log("Mật khẩu:", password);
  };


  return (
    <div className="login-container">
      <NavbarCreate />
      <div className="login-form container">
        <h2 className="mb-4">Đăng nhập</h2>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Tên đăng nhập
          </label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Mật khẩu
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="button-container">
          <button onClick={handleUserSubmit} className="btn btn-primary">
            Đăng nhập
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};


export default Login;
