import React from 'react'; // Importing React library for using React components
import { Link } from 'react-router-dom'; // Importing Link component from React Router library
import './AddAlbum.css'; // Importing CSS file for styling this component
import { FaPlus } from 'react-icons/fa'; // Importing Plus icon from Font Awesome icons

// Defining AddAlbum functional component which accepts props as parameter
const AddAlbum = (props) => {

  // This function reads input values entered by the user and adds the album to the album list
  const getAlbumFormData = () => {
    const userId = document.getElementById('aaform-userid-inp').value; // Reading user id from input field
    const title = document.getElementById('aaform-title-inp').value; // Reading album title from input field
    if(!userId || !title){
      alert('Please fill in all fields'); // Creating an alert if either field is left empty
      return; // Returning if both fields are not filled
    }
    props.addAlbumToList(Number(userId), title); // Calling the addAlbumToList function passed as prop from parent component
  };

  // Returning JSX - AddAlbum form for adding new albums
  return (
    <>
      <div className="addalbum-container">
        <div className="addalbum-form">
          <h4>Enter New Album Details</h4>
          <div className="inp-container">
            <label htmlFor="aaform-userid-inp">Enter User Id:</label>
            <input id="aaform-userid-inp" type="number" required/>
          </div>
          <div className="inp-container">
            <label htmlFor="aaform-title-inp">Enter Album Title:</label>
            <input id="aaform-title-inp" type="text" required />
          </div>
          <div>
            <Link to="/">
              <button className='Add_to_list_button' onClick={getAlbumFormData}><FaPlus className="albums-list__add-icon" /> Add To List</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAlbum; // Exporting AddAlbum component so that it can be imported in other components