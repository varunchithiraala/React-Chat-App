import React from 'react';
import Navbar from '../Navbar';
import ChatBox from '../ChatBox';
import './index.css';

const ChatApp = () => {
  return (
    <div className="chat-app-container">
      <Navbar />
      <div className="introductions-container">
        <ChatBox />
      </div>
    </div>
  );
};

export default ChatApp;
