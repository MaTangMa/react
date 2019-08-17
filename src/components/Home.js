import React, { Component } from 'react';
// import { deflate } from 'zlib';
import '../assets/css/index.css';

class Home extends Component {
  // 构造函数
  constructor() {
    super();
    // 定义数据
    this.state = {
      name: 'Mac',
      color: 'red',
      style: {
        color: 'green',
        fontSize: '30px'
      }
    };
    // 第二种改变this指向方法
    this.getName = this.getName.bind(this);
  }

  // 定义方法
  run() {
    alert('方法调用:' + this.state.name);
  }
  getName = () => {
    alert('方法调用:' + this.state.name);
  };
  getNameFn = () => {
    alert('方法调用:' + this.state.name);
  };
  setName = () => {
    this.setState({
      name: 'machan'
    });
  };
  setName2 = str => {
    this.setState({
      name: str
    });
  };
  eventObj = event => {
    console.log('事件对象：', event.target);
    event.target.style.background = 'rgb(198, 219, 165)';
    console.log('获取自定义aid属性：', event.target.getAttribute('aid'));
  };

  // 模板
  render() {
    // 如果return只有一行代码可以不写（）
    return (
      <div>
        <h2>hello react</h2>
        <p className="red">this name {this.state.name}</p>
        <div className={this.state.color}>class bind</div>

        <label htmlFor="name">name</label>
        <input type="text" id="name" />
        <div style={{ color: 'red' }}>style写法</div>
        <div style={this.state.style}>style绑定</div>
        <button className="myBtn" onClick={this.run}>
          点击事件 不改变this指向报错
        </button>
        <button className="myBtn" onClick={this.run.bind(this)}>
          点击获取数据需改变this指向
        </button>
        <button className="myBtn" onClick={this.getName}>
          改变this指向方法二
        </button>
        <button className="myBtn" onClick={this.getNameFn}>
          改变this指向方法三
        </button>
        <button className="myBtn" onClick={this.setName}>
          改变name
        </button>
        <button className="myBtn" onClick={this.setName2.bind(this, '传入name')}>
          改变name 传值
        </button>
        <button aid="123" className="myBtn" onClick={this.eventObj}>
          事件对象
        </button>
      </div>
    );
  }
}

// 导出
export default Home;
