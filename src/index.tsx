import * as React from "react";
import Main from './components/main';
import pubsub from './pubsub';
import { APP_INIT } from './constants';
import * as ReactDOM from 'react-dom';
const styles = require('./styles.scss');

  const stylesEl = document.createElement('style');
  stylesEl.innerHTML = styles;
  document.head.appendChild(stylesEl);
  
  ReactDOM.render(
      <Main/>,
      document.getElementById("app-root")
  );
