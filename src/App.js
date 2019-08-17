import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import routers from './model/routers.js';
import './assets/css/App.css';

// 引入组件
import Header from './components/Header.js';
// import Home from './components/Home.js';
// import News from './components/News.js';
// import FormDemo from './components/FormDemo.js';
// import ToDoList from './components/ToDoList.js';
// import NewsDetail from './components/NewsDetail.js';
// import SetCenter from './components/SetCenter.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <Header />
            <Link to="/"> 首页 </Link>
            <Link to="/news"> 新闻 </Link>
            <Link to="/form"> 表单 </Link>
            <Link to="/todoList"> 列表操作 </Link>
            <Link to="/setCenter"> 设置中心 </Link>
          </header>
          {/* exact是严格匹配 如果不加 /news 同样会匹配home */}
          {/* <Route exact path="/" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/form" component={FormDemo} />
          <Route path="/todoList" component={ToDoList} />
          <Route path="/setCenter" component={SetCenter} /> */}
          {/* url传参此处不用配置，路由传参配置 path="/newsDetail/:id" */}
          {/* <Route path="/newsDetail" component={NewsDetail} /> */}

          {routers.map((router, key) => {
            if (router.exact) {
              return (
                <Route
                  key={key}
                  exact
                  path={router.path}
                  render={props => <router.component {...props} routers={router.routers} />}
                />
              );
            } else {
              return (
                <Route
                  key={key}
                  path={router.path}
                  render={props => <router.component {...props} routers={router.routers} />}
                />
              );
            }
          })}
        </div>
      </Router>
    );
  }
}

export default App;
