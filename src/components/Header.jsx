import React from 'react'; // Importing React library for using React components
import './Header.css'; // Importing custom header Css 
import Navbar from './Navbar'; // Importing Navbar 

// Defining Header functional component 
const Header = () => {
  return (
    <div>
        <header className="header">
            <h1 className="header__title">Album List Web</h1>
            <nav className="header__nav">
                 <Navbar path="/" page="Home" />
                <ul className="header__nav-list">
                    <Navbar page="Add Album" path="/add-album" />
                </ul>
            </nav>
        </header>
    </div>
  );
};

// Exporting the Header component to be used in other parts of the application
export default Header;