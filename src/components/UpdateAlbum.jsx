import React from 'react'; // Importing React library for using React components
import { Link } from 'react-router-dom'; // Importing Link component from React Router library
import './UpdateAlbum.css';

// Defining UpdateAlbum functional component which accepts props as parameter
const UpdateAlbum = (props) => {
  // Function to handle update data
  const getUpdateData = () => {
    const id = props.album.id;
    let updateTitle = document.getElementById('title-inp').value;
    let updateUserid = document.getElementById('userid-inp').value;

    // Check if any field is empty
    if (!updateTitle || !updateUserid) {
      alert('Please fill in all fields');
      return;
    }

    // If title field is empty, set it to the original title
    if (updateTitle === '') {
      updateTitle = props.album.title;
    }

    // If userid field is empty, set it to the original userid
    if (updateUserid === '') {
      updateUserid = props.album.userId;
    }

    // Call the updateAlbumInList function from props to update the album in the list
    props.updateAlbumInList(id, updateTitle, Number(updateUserid), props.album);
  };

  // Returning JSX - UpdateAlbum form for updating The album
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h2>Update The Album</h2>
      </div>
      <div className="update-album">
        <div className="form-container">
          <h4>Title: {props.album.title}</h4>
          <div className="inp-container">
            <label htmlFor="title-inp">Enter New Title:</label>
            <input type="text" id="title-inp" required aria-required />
          </div>

          <h4>User Id: {props.album.userId}</h4>
          <div className="inp-container">
            <label htmlFor="userid-inp">Enter New UserId:</label>
            <input type="number" id="userid-inp" required aria-required />
          </div>

          <Link to="/">
            <button type="submit" onClick={getUpdateData}>
              Save
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

// Exporting the UpdateAlbum component to be used in other parts of the application
export default UpdateAlbum;