// Footer.jsx
import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <div className="Footer">
      <div className="FooterContent">
        <div className="ContactInfo">
          <h2>Contact</h2>
          <p>Email: sripathyrs.21csd@kongu.edu</p>
          <p>Mobile: +91-98942 93790</p>
        </div>
        <div className="ContactInfo">
          <h2>Sites</h2>
        <p>leetcode</p>
        <p>github</p>
        <p>LinkedIn</p>
        </div>

        <div class="ContactInfo">
            <h2>Address</h2>
            <p>19/10 - Bazaar street, Mohanur,
            <br/>Namakkal - 637015</p> 
        </div>
        </div>
    </div> 
  );
};

export default Footer;
