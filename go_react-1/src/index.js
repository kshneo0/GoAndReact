import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppContent from './AppContent';
import AppFooter from './AppFooter';
import './index.css';

class App extends Component {
  render() {
    const title = "Single Page App";
    return (
      <div className="app">
        <div>
          <h1>{title}</h1>
          <AppContent />
        </div>
        <AppFooter />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
