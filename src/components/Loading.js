import React from 'react';
import Loader from 'react-loader-spinner';
import "./loader.css";


 
const Loading = () => {
    return (
      <div className="loader-icon">
      <Loader type="Circles" color="#FFA16A" height={80} width={80}/>
      </div>
 
    );
  }

export default Loading;
 