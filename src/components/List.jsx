import React from 'react'; // Importing React library for using React components
import { Link } from "react-router-dom"; // Importing Link component from React Router library
import { FaTrash , FaEdit } from 'react-icons/fa'; // Importing Icons  from React Icons library

//get album from album list and show using html css and js
const List = (props) => {
  return (
    <div className='list'>
      <h3 style={{padding:5}}>- {props.album.title}</h3>
      <div className='button-group' style={{display:'flex',justifyContent:'space-around'}}>
        <Link to="/update-album"><button className="update-btn" onClick={() => props.setUpdateAlbum(props.album)}> <FaEdit style={{ marginRight: '5px' }} />Update</button></Link>
        <button className='delete-btn' onClick={() => props.deleteAlbumFromList(props.album.id)}><FaTrash style={{ marginRight: '5px' }} />Delete</button>
      </div>
    </div>
  )
};

// Exporting the List component to be used in other parts of the application
export default List
