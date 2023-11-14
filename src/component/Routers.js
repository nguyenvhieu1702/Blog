import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Components
import BeginPost from './BeginPost';
import BeginPost2 from './BeginPost2';
import GetPost from './GetPost';
import Login from './Login';
import HomePage from '../pages/Home';


const Routers = () => {
  return (

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/BeginPost" element={<BeginPost />} />
        <Route path="/BeginPost2" element={<BeginPost2 />} />
        <Route path="/GetPost" element={<GetPost />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
   
  );
}


export default Routers