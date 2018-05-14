import React from 'react';

import './BaseHeader.css';

const BaseHeader = ({ children }) => {

  return (
    <header className='baseheader_wrapper'>
      {children}
    </header>
  );

}

export default BaseHeader;