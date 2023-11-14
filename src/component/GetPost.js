import React, { useState, useEffect } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const GetPost = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/getPost')
      .then(response => response.json())
      .then(data => {
        setBlog(data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <Container className="mt-4">
      <h1 className="mb-4">My Blog</h1>
      <div id="text">
        {blog.map(post => (
          <Card key={post.id} className="mb-4">
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.body}</Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default GetPost;
