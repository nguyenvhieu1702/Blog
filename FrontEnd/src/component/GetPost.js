import React, { useState, useEffect } from 'react';

const GetPost = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/getPost')
      .then(response => response.json())
      .then(data => {
        setBlog(data);
        const textElement = document.getElementById('text');

        const postHTMLArray = data.map(post => `<div><h3>${post.title}</h3><p>${post.body}</p></div>`);

        textElement.innerHTML = postHTMLArray.join('');
        console.log(data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="App">
      
      <div id='text'></div>
    </div>
  );
};

export default GetPost;
