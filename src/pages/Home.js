import React from 'react';
import Navbar from '../components/Navbar';
import EventList from '../components/EventList';


function Home() {
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

export default Home;