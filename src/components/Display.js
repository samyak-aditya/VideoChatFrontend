import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { toast,Toaster } from 'react-hot-toast'; // Import useToasts from react-hot-toast
import { SocketContext } from '../SocketContext';

const Display = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
   

  const handleAcceptCall = () => {
    answerCall();
    
  };

  toast(
    <div>
      {call.isReceivingCall && !callAccepted && (
        <div >
          <h1>{call.name} is calling:</h1>
          <Button variant="contained" color="primary" onClick={handleAcceptCall}>
            Answer
          </Button>
        </div>
        
      )}
      </div>
      )


  return (
    
    <div>
      {call.isReceivingCall && !callAccepted && (
        <div >
          <h1>{call.name} is calling:</h1>
          <Button variant="contained" color="primary" onClick={handleAcceptCall}>
            Answer
          </Button>
        </div>
        
      )}
      </div>
      )

      
};

export default Display;
