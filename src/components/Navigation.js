import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        backgroundColor: '#e1e1e1'
      }
    };
  }
  render() {
    return (
      <div style={this.state.style}>
        {this.props.title}
        {/* {() => {
          if (this.props.num !== 0) {
            return this.props.num;
          }
        }} */}
      </div>
    );
  }
}
//defaultProps   如果父组件调用子组件的时候不给子组件传值，可以在子组件中使用defaultProps定义的默认值
Navigation.defaultProps = {
  title: '首页',
  num: 0
};

//同行propTypes定义父组件给子组件传值的类型
Navigation.propTypes = {
  title: PropTypes.string,
  num: PropTypes.number
};

export default Navigation;
