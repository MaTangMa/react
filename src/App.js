import React, { Component } from 'react';
import './assets/css/App.css';

// 引入组件
import Header from './components/Header.js';
import Home from './components/Home.js';
import News from './components/News.js';
import FormDemo from './components/FormDemo.js';
import ToDoList from './components/ToDoList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <Home />
        <News />
        <FormDemo />
        <ToDoList />
        */}
        <News />
      </div>
    );
  }
}

export default App;
