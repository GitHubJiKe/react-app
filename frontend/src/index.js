import React, { Component } from 'react';
import { render } from "react-dom";
import App from "./components/App";
import style from './styles/index.scss';
import 'bulma/css/bulma.min.css';
var rootDom = document.getElementById('root');

if (!rootDom) {
  rootDom = document.createElement('div');
  rootDom.setAttribute('id', 'root');
}

render(<App></App>, rootDom);