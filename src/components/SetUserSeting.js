import React, { Component } from 'react';
import { Button } from 'antd';
import { DatePicker } from 'antd';

class SetCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  dateChange = (date, dateString) => {
    console.log(date, dateString);
  };
  render() {
    return (
      <div>
        用户设置
        <Button type="primary">Primary</Button>
        <DatePicker onChange={this.dateChange} />
      </div>
    );
  }
}

export default SetCenter;
