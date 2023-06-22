import React from 'react'; // Importing the react library

import List from './List'; // Importing the List component
import './AlbumsList.css'; // Importing the CSS file for styling

const AlbumsList = (props) => { // Declaring a functional component named AlbumsList which accepts props as a parameter
  return (
    <>
    {/* { Creating a div with class 'albums-list' that is aligned to the center} */}
      <div className="albums-list" style={{textAlign:'center'}}> 
      {/* Creating a div with class 'albums-list__header' */}
        <div className="albums-list__header" >  
        {/*  Adding a heading with class 'albums-list__title' */}
          <h2 className="albums-list__title">All Albums</h2>
        </div>
        {/* // Adding a horizontal line */}
        <hr /> 
        {props.albums.map((album) => ( // Using the map method to iterate over the array of albums and creating a List component for each album
          <List
            album={album} // Passing the current album as a prop to the List component
            key={album.id} // Setting the album id as the key for each List component
            setUpdateAlbum={props.setUpdateAlbum} // Passing the 'setUpdateAlbum' function as a prop to the List component
            deleteAlbumFromList={props.deleteAlbumFromList} // Passing the 'deleteAlbumFromList' function as a prop to the List component
          />
        ))}
      </div>
    </>
  );
};

export default AlbumsList; // Exporting the AlbumsList component to be used in other parts of the application