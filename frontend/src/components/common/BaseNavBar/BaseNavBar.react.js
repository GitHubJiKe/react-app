import React from 'react';

import './BaseNavBar.css';

class BaseNavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='basenavbar_wrapper navbar'>
        {this.props.children}
      </div>
    );
  }
}

export default BaseNavBar;