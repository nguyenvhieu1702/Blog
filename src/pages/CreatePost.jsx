import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import NavbarCreate from '../component/NavBarCreate';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [body, setBody] = useState('');
  const [img, setImg] = useState('');

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
      alert("Upload thanh cong")
      setImg(data.secure_url); 
    })
    .catch(error => console.error('Error:', error));
  }

  const handleSubmit = () => {
    fetch('http://localhost:8080/createPost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, body, content, img })
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

      <label>Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <label>Content:</label>
      <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
      <Editor
        apiKey="7b7e7xrj4gtd69lr1pvgfc9w5x24dyvqvngpawc8ndzy95q5"
        value={body}
        onEditorChange={handleEditorChange}
      />
      <div>
        <label htmlFor="img">Chọn ảnh:</label>
        <input
          type="file"
          id="img"
          accept="image/*"
          onChange={handleImgChange}
        />
      </div>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default CreatePost;
