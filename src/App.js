import React from 'react';
import './App.css'; // Import your custom CSS file
import VideoPlayer from './components/VideoPlayer';
import Notifications from './components/Notifications';
import Sidebar from './components/Options';
import { SocketContext } from './SocketContext';
import { useContext } from 'react';
import Add from './components/Add';
import { Button } from '@mui/material';
import Display from './components/Display';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  return (
    <div className="wrapper"> 
      <div className="app-bar">
        <h2 className="app-title">Video Chat</h2>
        <h5>{name || 'Name'}</h5>
      </div>
      <VideoPlayer />
      <div className="custom-dropdown">
      <Add />
      <Display />
      
      </div>
      
      
    </div>    
  );
};

export default App;
