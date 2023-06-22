
import React from 'react'; // import the React library
import ReactDOM from 'react-dom/client'; // import the ReactDOM library
import { BrowserRouter } from "react-router-dom"; // import the BrowserRouter from react-router-dom
import App from "./components/App"; // import the App component from the components directory
import './index.css'; // import the index.css file
import Header from "./components/Header"; // import the Header component from the components directory
import Footer from './components/Footer';// import the Footer component from the components directory

// render the app in the root element of the DOM
ReactDOM.createRoot(document.getElementById('root')).render( 
 // wrap the entire app with BrowserRouter component for client-side routing
  <BrowserRouter> 
  {/* enable strict mode to check for potential issues within the app */}
    <React.StrictMode> 
      {/* wrap the app components within a div element */}
      <div>
        {/* // render the Header component */}
        <Header/> 
        {/* // render the App component */}
        <App /> 
        {/* Render tha footer component */}
        <hr />
        <Footer/>
      </div> 
    </React.StrictMode>
  </BrowserRouter>  
);
