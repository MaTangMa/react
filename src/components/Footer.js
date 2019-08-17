import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'footer component',
      style: {
        backgroundColor: '#e1e1e1'
      }
    };
  }
  run = () => {
    alert('footer fn --> run');
  };
  render() {
    return (
      <div style={this.state.style}>
        <h2>I'm a footer</h2>
        <button onClick={this.props.news.getChildData.bind(this, this.state.msg)}>
          传值给父组件
        </button>
      </div>
    );
  }
}

export default Footer;
