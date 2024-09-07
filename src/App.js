// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import EventList from './components/EventList';
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home />}/>  
          </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
