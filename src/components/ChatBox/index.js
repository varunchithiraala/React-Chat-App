import React, { useState, useRef } from 'react';
import Picker from 'emoji-picker-react';
import { CiFaceSmile } from "react-icons/ci";
import { HiOutlineUsers } from "react-icons/hi2";
import { IoMdSend } from "react-icons/io";
import ChatMessage from '../ChatMessage';
import './index.css';

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin Emmanuel", "Rolande Raimondi"];

const ChatBox = () => {
  const [messages, setMessages] = useState([
    {
      user: 'PubNub Bot',
      text: 'Welcome to Team Chat. 👋👋 Send a message now to start interacting with other users in the app. ⬇️',
      time: '12:16',
      likes: 0
    },
    {
      user: 'Gregory Goolsby',
      text: 'Hey everyone!',
      time: '17:28',
      likes: 0 
    },
    {
      user: 'Elin Emmanuel',
      text: 'Oh hi, Gregory! Rolande is around, too...',
      time: '17:30',
      likes: 0 
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showUserList, setShowUserList] = useState(false);
  const [mentionIndex, setMentionIndex] = useState(-1);
  const inputRef = useRef(null);

  const handleSend = () => {
    if (newMessage.trim() === '') return;
    const randomUser = user_list[Math.floor(Math.random() * user_list.length)];
    setMessages([...messages, {
      user: randomUser, text: newMessage,
      time: new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit'}),
      likes: 0
    }]);
    setNewMessage('');
  };

  const handleLike = index => {
    const updatedMessages = [...messages];
    updatedMessages[index].likes += 1;
    setMessages(updatedMessages);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  const onEmojiClick = (emojiObject) => {
    setNewMessage(newMessage + emojiObject.emoji);
    setShowEmojiPicker(false);
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setNewMessage(value);

    const cursorPosition = event.target.selectionStart;
    if (value[cursorPosition - 1] === '@') {
      setMentionIndex(cursorPosition);
      setShowUserList(true);
    } else {
      setShowUserList(false);
    }
  };

  const handleUserClick = (user) => {
    const newText = newMessage.slice(0, mentionIndex) + user + newMessage.slice(mentionIndex);
    setNewMessage(newText + " ");
    setShowUserList(false);
    inputRef.current.focus();
  };

  return (
    <div className="chat-box-container">
      <div className="chat-header-container">
        <div className="chat-box-introductions-container">
          <div>
            <h2 className="introductions-heading">Introductions</h2>
            <p className="introductions-text">This Channel is For Company Wide Chatter</p>
          </div>
          <div className="users-icon-container">
            <span className="users-count">3 | 100</span>
            <HiOutlineUsers className="users-icon" />
          </div>
        </div>
      </div>
      <div className="messages-container">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message}
            onLike={() => handleLike(index)}
          />
        ))}
      </div>
      <div className="chat-input-container">
        <input
          type="text"
          className="chat-input"
          value={newMessage}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          ref={inputRef}
          placeholder="Type a Message..."
        />
        <CiFaceSmile
          className="emoji-icon"
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
        />
        <IoMdSend 
          className="send-icon"
          onClick={handleSend}
        />
        {showEmojiPicker && (
          <div className="emoji-picker-wrapper">
            <Picker onEmojiClick={onEmojiClick} />
          </div>
        )}
        {showUserList && (
          <div className="user-list">
            {user_list.map((user, index) => (
              <div
                key={index}
                className="user-list-item"
                onClick={() => handleUserClick(user)}
              >
                {user}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBox;
