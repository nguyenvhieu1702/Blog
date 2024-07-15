import React, { useState } from 'react';

const BeginPost2 = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [img, setImg] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  }

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
      setImg(data.secure_url); 
    })
    .catch(error => console.error('Error:', error));
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:8080/createPost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, body, img })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Dữ liệu đã được gửi đi:', data);
    })
    .catch(error => console.error('Error:', error));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Tiêu đề:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <label htmlFor="body">Nội dung:</label>
        <textarea
          id="body"
          value={body}
          onChange={handleBodyChange}
        />
      </div>
      <div>
        <label htmlFor="img">Chọn ảnh:</label>
        <input
          type="file"
          id="img"
          accept="image/*"
          onChange={handleImgChange}
        />
      </div>
      <button type="submit">Gửi</button>
    </form>
  );
}

export default BeginPost2;