// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import EventList from './components/EventList';
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='registro' element={<RegisterPage />}/>
              <Route path='login' element={<LoginPage />}/>
          </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
