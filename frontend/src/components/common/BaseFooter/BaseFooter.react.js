import React from 'react';
import './style.css';


const BaseFooter = ({ children }) => {

  return (
    <footer className="footer my_footer" style={{ padding: 0 }}>
      {children}
    </footer>
  );

}

export default BaseFooter;