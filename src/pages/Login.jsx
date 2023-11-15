import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

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

    console.log("Tên người dùng:", username);
    console.log("Mật khẩu:", password);
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
  };

  return (
    <div className="login-container">

        <>
          <h2>Đăng nhập</h2>
          <div className="input-container">
            <label>Tên đăng nhập</label>
            <input
              type="text"
              className="form-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label>Mật khẩu</label>
            <input
              type="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="button-container">
            <button onClick={handleUserSubmit} className="login-button">
              Đăng nhập
            </button>
          </div>
        </>
    </div>
  );
};

export default Login;
