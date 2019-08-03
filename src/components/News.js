import React from 'react';
// 图片引入
import img from '../assets/images/red.jpg';
//
import '../assets/css/index.css';
class News extends React.Component {
  constructor(props) {
    super(props); // props用于父子组件传值，也是标准
    this.state = {
      msg: '新闻',
      newsList: [{ content: '1111' }, { content: '2222' }, { content: '3333' }],
      htmlList: [<h2 key="1">h2list</h2>, <h2 key="2">h2list2</h2>]
    };
  }
  render() {
    let listResut = this.state.newsList.map((value, key) => {
      return <li key={key}>{value.content}</li>;
    });

    return (
      <div>
        <ul>
          <li>图片引入</li>
          <li>远程图片引入</li>
          <li>3</li>
        </ul>
        <img className="img" src={img} alt="" />
        <img className="img" src={require('../assets/images/red.jpg')} alt="" />
        <img className="img" src="https://www.baidu.com/img/bd_logo1.png?where=super" alt="" />

        {this.state.htmlList}

        <ul>{listResut}</ul>
        <ul>
          {// 或者直接在这里循环
          this.state.newsList.map((value, key) => {
            return <li key={key}>{value.content}</li>;
          })}
        </ul>
      </div>
    );
  }
}
export default News;
