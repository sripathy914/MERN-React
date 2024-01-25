// Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="FooterContent">
        <div className="ContactInfo">
          <p>Contact: sripathyrs.21csd@kongu.edu</p>
        </div>
        <div className="SocialLinks"> 
          <a href="https://github.com/sripathy914" target="_blank">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/sripathy-sathyanarayanan-13317522a/" target="_blank">
            LinkedIn
          </a>
          <a href="https://leetcode.com/srisud04/" target="_blank"> 
            LeetCode
          </a>
        </div>
      </div> 
      <div className="Copyright">
        <p>&copy; 2024 All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
