import React from 'react';
import './style.css';


const BaseContainer = ({ children, props }) => {
  return (
    <div className="my_container" {...props}>
      {children}
    </div>
  );

}

export default BaseContainer;