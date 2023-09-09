import React from 'react';
import './App.css'; // Import your custom CSS file
import VideoPlayer from './components/VideoPlayer';
import Notifications from './components/Notifications';
import Sidebar from './components/Options';
import { SocketContext } from './SocketContext';
import { useContext } from 'react';

const App = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  return (
    <div className="wrapper"> 
      <div className="app-bar">
        <h2 className="app-title">Video Chat</h2>
        <h5>{name || 'Name'}</h5>
      </div>
      <VideoPlayer />
      <div className="custom-dropdown">
      <Sidebar>
      <Notifications />
      </Sidebar>
      </div>
      
      
    </div>    
  );
};

export default App;
