import Login from './pages/Login';
import React from 'react';
import styles from './App.module.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { Route, useRoutes, Routes } from 'react-router-dom';

function App() {
  const element = <Login/>;
  const Apps = () => 
    useRoutes(['/login'].map(path => ({path, element})));
  return (
      <Routes>
        <Route path="/" element={element}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
  );
}

export default App;
