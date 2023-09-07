import React from 'react';
import './App.css'; // Import your custom CSS file
import VideoPlayer from './components/VideoPlayer';
import Notifications from './components/Notifications';
import Sidebar from './components/Options';

const App = () => {
  return (
    <div className="wrapper"> 
      <div className="app-bar">
        <h2 className="app-title">Video Chat</h2>
      </div>
      <VideoPlayer />
      <Sidebar>
      <Notifications />
      </Sidebar>
      
      
    </div>    
  );
};

export default App;
