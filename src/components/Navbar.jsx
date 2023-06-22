import React from 'react'; // Importing React library for using React components
import { Link } from 'react-router-dom'  // Importing Link component from React Router library

import './AlbumsList.css';

//get button name and path for evaery component
const Navbar = (props) => {

  return (
    <div className='navbar' style={{textAlign:'center',marginBottom:5}}>
        <Link to={props.path}><button style={{marginRight:5}}>{props.page}</button></Link>
    </div>
  )
}
// Exporting the Navbar component to be used in other parts of the application
export default Navbar;
