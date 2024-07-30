import React, { useState } from 'react';
import { BsPlusCircle } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import './index.css';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <div className={`navbar-container ${isNavOpen ? 'open' : ''}`}>
        <div className="navbar-header">
          <AiOutlineClose className="close-icon" onClick={toggleNav} />
        </div>
        <div className="navbar-profile-container">
          <div className="profile-icon">RR</div>
          <div className="profile-details-container">
            <h1 className="profile-name">Rolande Raimondi</h1>
            <p className="profile-profession">Research Nurse</p>
          </div>
        </div>
        <div className="conversations-container">
          <div className="header">
            <h1 className="conversations-heading">Conversations</h1>
            <BsPlusCircle className="plus-icon" />
          </div>
          <div className="convo-list">
            <div className="convo-item">
              <span className="hash">#</span> Poland Office
            </div>
            <div className="convo-item bg-convo-item">
              <span className="hash bg-hash">#</span> Introductions
            </div>
            <div className="convo-item">
              <span className="hash">#</span> India Office
            </div>
          </div>
        </div>
      </div>
      <div className={`nav-icon ${isNavOpen ? 'hidden' : ''}`} onClick={toggleNav}>
        <AiOutlineMenu />
      </div>
    </>
  );
};

export default Navbar;
