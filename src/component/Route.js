import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Components
import BeginPost from './BeginPost';
import BeginPost2 from './BeginPost2';
import GetPost from './GetPost';
import Login from './Login';


const Routte = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/BeginPost" element={<BeginPost/>} />
        <Route path="/BeginPost2" element={<BeginPost2/>} />
        <Route path="/GetPost" element={<GetPost/>} />
        <Route path="/Login" element={<Login/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default Routte;
