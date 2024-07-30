import React from 'react';
import './index.css';

const userColors = {
  "PubNub Bot": "#ff1a1a",
  "Gregory Goolsby": "#00ff00",
  "Elin Emmanuel": "#ff6680",
  "Alan": "#ffa500",
  "Bob": "#cc6699",
  "Carol": "#ee82ee",
  "Dean": "#ff99aa",
  "Rolande Raimondi": "#ff6666"
};

const ChatMessage = ({ message, onLike }) => {
  const { user, text, time, likes } = message;
  const profile = user.slice(0, 2).toUpperCase();
  const backgroundColor = userColors[user] || '#cccccc';

  return (
    <div className="chat-message-container">
      <div className="profile-container" style={{ backgroundColor }}>{profile}</div>
      <div className="message-content">
        <h1 className="user-name">{user}<span className="message-time">{time}</span></h1>
        <span className="message-text">
          {text}<br />
          <p className="like-button" onClick={onLike}>
            👍{likes}
          </p>
        </span>
      </div>
    </div>
  );
};

export default ChatMessage;
