import React, { Component } from 'react';
import url from 'url';

class NewsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ''
    };
  }

  // 组件创建加载
  componentDidMount() {
    let urlParams = url.parse(this.props.location.search, true).query;
    let matchParams = this.props.match.params;
    // 获取路由传值
    console.log('新闻id', matchParams);

    // url传参 app中的route不需要配置
    console.log('新闻idquery', urlParams);

    if (urlParams.id) {
      this.setState({
        id: urlParams.id
      });
    } else {
      this.setState({
        id: matchParams.id
      });
    }
  }

  render() {
    return <div>新闻id： {this.state.id}</div>;
  }
}

export default NewsDetail;
