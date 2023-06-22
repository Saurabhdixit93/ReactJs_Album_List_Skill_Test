import React from 'react'; // Importing React library for using React components
import './Footer.css'; // Importing custom header Css 
import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa'; // importing react icons
const Footer = () => {
 
// sending JSX  
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-links">
          <a href="https://github.com/Saurabhdixit93" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/Saurabhdixit93" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:smartds2550@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaMailBulk />
          </a>
        </div>
        <div className="copy-right">
          <span>© 2023 Saurabh Dixit. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};
// Exporting the Footer component to be used in other parts of the application
export default Footer;