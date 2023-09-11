import React, { useState } from 'react';
import Sidebar from './Options';
import Notifications from './Notifications';
import './Add.css';

const Add = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  // Function to open the popup
  const openPopup = () => {
    const popup = document.getElementById("myPopup");
    if (popup) {
      popup.style.display = "block";
      setPopupVisible(true);
    }
  };

  // Function to close the popup
  const closePopup = () => {
    const popup = document.getElementById("myPopup");
    if (popup) {
      popup.style.display = "none";
      setPopupVisible(false);
    }
  };

  // Render the component
  return (
    <div>
      <button className='add' onClick={openPopup}>
        <img src = "https://cdn-icons-png.flaticon.com/512/258/258365.png" />
      </button>
      <div className="popup" id="myPopup">
        <div className="popup-content">
          <span className="close" onClick={closePopup}>&times;</span>
          <Sidebar>
            <Notifications />
          </Sidebar>
          <p>This is a simple React popup using DOM manipulation.</p>
        </div>
      </div>
    </div>
  );
};

export default Add;
