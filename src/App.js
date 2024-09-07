// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import EventList from './components/EventList';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="inicio">
        <Navbar />
      </div>
      <div className="corpo">
        <EventList />
      </div>
    </div>
  );
}

export default App;
