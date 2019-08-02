import React, { Component } from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

// 引入组件
import Home from './components/Home.js'
import News from './components/News.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
        <Home></Home>
        <News></News>
      </div>
    );
  }
}

export default App;
