import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import './BaseMenu.css';

const MenuItem = styled.a`
  padding:5px 40px;
  color: black;
  background: yellow;
  cursor:pointer;
  &:hover{
    background: red;
  }
`;

class BaseMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { menuLabel, menuList } = this.props;
    return (
      <aside className='basemenu_wrapper menu'>
        <p className="menu-label">{menuLabel}</p>
        <ul>
          {menuList.map((v, idx) => <li key={idx} {...v.eventMap}><MenuItem>{v.label}</MenuItem></li>)}
        </ul>
      </aside>
    );
  }
}

BaseMenu.propTypes = {
  menuLabel: PropTypes.string,
  menuList: PropTypes.array
}

BaseMenu.defaultProps = {
  menuLabel: 'menuLabel',
  menuList: [{
    label: 'MenuItem1',
    eventMap: {
      onClick: () => { alert('click') }
    }
  }]
}

export default BaseMenu;