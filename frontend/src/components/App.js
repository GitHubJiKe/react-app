import React, { Component } from 'react';
import ReactDom from "react-dom";

import common from './common';
const {
  BaseHeader,
  BaseContainer,
  BaseFooter,
  BaseNavBar,
  BaseMenu
} = common;

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <BaseContainer>
      <BaseHeader>
        <h1>App</h1>
      </BaseHeader>
      <BaseMenu menuLabel="菜单" menuList={[{
        label: '个人中心', eventMap: {
          onClick: () => { alert('去往个人中心') }
        }
      }]}></BaseMenu>
      <BaseFooter>power by Peter</BaseFooter>
    </BaseContainer>
  }

};
