import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { injectGlobal } from "emotion";

injectGlobal({
    body: {
      fontFamily: `Maiandra GD, sans-serif`,
      backgroundColor: "#212121"
    }
  });

ReactDOM.render(<App />, document.getElementById('root'));
