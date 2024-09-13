import React, { useState } from 'react';
import Recommendations from './Recommendations'; // Assuming you have a component for the chatbot UI
import './index.css';
function Chatbot() {
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(prevState => !prevState);
  };

  return (

   
  <div className="chatbox-container">
    <div className="chatbox-footer">
      <button className="" onClick={toggleChatbot}>
      {/* {showChatbot ? 'Hide Chatbot' : 'Show Chatbot'} */}
      <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3199307/message-circle-icon-md.png" alt="Chatbot Icon" style={{ width: '70px', height: '70px' }} />
        </button>
      </div>
      {showChatbot && <div className="recommendations-container" style={{ animation: 'fadeIn 0.9s' }}><Recommendations /></div>} {Recommendations}
      </div>
      

  );
}

export default Chatbot;

