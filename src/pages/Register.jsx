import React, { useState } from "react";
import NavbarCreate from '../component/NavBarCreate';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [roles, setRoles] = useState('ROLE_USER'); // Giá trị mặc định là 'ROLE_USER'

  const handleSubmit = () => {
    // Kiểm tra xem có thể thêm các kiểm tra hợp lý khác tại đây trước khi gửi yêu cầu

    fetch('http://localhost:8080/createUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, password, email, roles }) // Thêm roles vào dữ liệu gửi đi
    })
      .then(response => response.json())
      .then(data => {
        // Xử lý kết quả từ máy chủ nếu cần
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <NavbarCreate />
      <div className="container registration-form">
        <h2>Đăng ký</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Tên người dùng:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Mật khẩu:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* Roles không thay đổi nên không cần input */}
          <button type="button" className="btn btn-primary" onClick={handleSubmit}>
            Đăng ký
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
