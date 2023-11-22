import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import NavbarCreate from '../component/NavBarCreate';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'reactstrap';
import Footer from '../component/Footer';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [body, setBody] = useState('');
  const [img, setImg] = useState('');
  const [author] = useState(localStorage.getItem('author'));
  const [successAlert, setSuccessAlert] = useState(false);

  const handleEditorChange = (content, editor) => {
    setBody(content);
  };

  const handleImgChange = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'co3m8lyu');

    fetch('https://api.cloudinary.com/v1_1/dlr3ajyow/image/upload', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        setSuccessAlert(true);
        setImg(data.secure_url);
      })
      .catch(error => console.error('Error:', error));
  };

  const handleSubmit = () => {
    fetch('http://localhost:8080/createPost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
      },
      body: JSON.stringify({ title, body, content, img, author })
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
      <div className="container">
        {successAlert && (
          <Alert color="success">
            Đăng ảnh thành công
          </Alert>
        )}

        <div className="mb-3">
          <label className="form-label">Title:</label>
          <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div className="mb-3">
          <label className="form-label">Content:</label>
          <input type="text" className="form-control" value={content} onChange={(e) => setContent(e.target.value)} />
        </div>

        <Editor
          apiKey="7b7e7xrj4gtd69lr1pvgfc9w5x24dyvqvngpawc8ndzy95q5"
          value={body}
          onEditorChange={handleEditorChange}
        />

        <div className="mb-3">
          <label htmlFor="img" className="form-label">Chọn ảnh:</label>
          <input
            type="file"
            className="form-control"
            id="img"
            accept="image/*"
            onChange={handleImgChange}
          />
        </div>

        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
      </div>
      <Footer />
    </div>
  );
};

export default CreatePost;
