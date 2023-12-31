import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Components
import BeginPost from './BeginPost';
import BeginPost2 from './BeginPost2';
import GetPost from './GetPost';
import HomePage from '../pages/Home';
import CreatePost from '../pages/CreatePost';
import Login from '../pages/Login';
import PostDetail from '../pages/PostDetail';
import Register from '../pages/Register';
import Manager from '../pages/Manager';


const Routers = () => {
  return (

      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/CreatePost" element={<CreatePost />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/BeginPost" element={<BeginPost />} />
        <Route path="/BeginPost2" element={<BeginPost2 />} />
        <Route path="/GetPost" element={<GetPost />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Manager" element={<Manager />} />
      </Routes>
   
  );
}


export default Routers