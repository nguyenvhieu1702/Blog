import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const BeginPost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleEditorChange = (content, editor) => {
    setBody(content);
  };

  const handleSubmit = () => {
    fetch('http://localhost:8080/createPost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, body })
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
      <label>Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

      <label>Body:</label>
      <Editor
        apiKey="7b7e7xrj4gtd69lr1pvgfc9w5x24dyvqvngpawc8ndzy95q5"
        init={{
          plugins: 'ai tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss',
          toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
          tinycomments_mode: 'embedded',
          tinycomments_author: 'Author name',
          mergetags_list: [
            { value: 'First.Name', title: 'First Name' },
            { value: 'Email', title: 'Email' },
          ],
          ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
        }}
        value={body}
        onEditorChange={handleEditorChange}
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default BeginPost;
