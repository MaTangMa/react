import React from 'react';

import '../assets/css/index.css';
import Navigation from './Navigation';

class FormDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
      userName: '',
      sex: '1',
      citys: ['北京', '上海', '深圳'],
      city: '',
      hobby: [
        {
          title: 'sleep',
          checked: true
        },
        {
          title: 'eat',
          checked: false
        },
        {
          title: 'coding',
          checked: false
        }
      ],
      remark: ''
    };
  }

  inputChange = e => {
    // 获取表单值
    console.log(e.target.value);
    this.setState({
      inputVal: e.target.value
    });
  };
  userNameChange = () => {
    let val = this.refs.userName.value;
    this.setState({
      userName: val
    });
  };
  getUserName = e => {
    alert(this.state.userName);
  };
  inputKeyUp = e => {
    if (e.keyCode === 13) {
      alert(this.state.inputVal);
    }
  };
  changeUserName = e => {
    this.setState({
      userName: 'myName'
    });
  };

  handleSubmit = e => {
    e.preventDefault(); // 阻止默认提交
    console.log('表单值：', this.state.city, this.state.sex, this.state.userName, this.state.hobby, this.state.remark);
  };
  handleSex = e => {
    this.setState({
      sex: e.target.value
    });
  };
  handleCity = e => {
    this.setState({
      city: e.target.value
    });
  };
  handleHobby = key => {
    console.log(event);
    console.log('argument:', arguments[0]);
    let hob = this.state.hobby;
    hob[key].checked = !hob[key].checked;
    this.setState({
      hobby: hob
    });
  };
  handleRemark = e => {
    this.setState({
      remark: e.target.value
    })
  }

  render() {
    return (
      <div>
        <Navigation title="首页 > 表单处理" />
        <p>描述：{this.state.inputVal}</p>
        <input
          className="myInput"
          type="text"
          onChange={this.inputChange}
          onKeyUp={this.inputKeyUp}
        />
        <p>用户名：{this.state.userName}</p>
        {/* <input
          ref="userName"
          defaultValue={this.state.userName}
          className="myInput"
          type="text"
          onChange={this.userNameChange}
        /> */}
        <button className="myBtn" onClick={this.getUserName}>
          获取userName
        </button>
        <button className="myBtn" onClick={this.changeUserName}>
          改变userName
        </button>

        <form action="" onSubmit={this.handleSubmit}>
          用户名：
          <input
            ref="userName"
            className="myInput"
            type="text"
            value={this.state.userName}
            onChange={this.userNameChange}
          />
          <br />
          性别：
          <input
            type="radio"
            checked={this.state.sex === '1'}
            value="1"
            onChange={this.handleSex}
          />
          男
          <input
            type="radio"
            checked={this.state.sex === '0'}
            value="0"
            onChange={this.handleSex}
          />
          女
          <br />
          居住城市：
          <select name="" id="" value={this.state.city} onChange={this.handleCity}>
            <option key="-1">--请选择--</option>
            {this.state.citys.map((value, key) => {
              return <option key={key}>{value}</option>;
            })}
          </select>
          <br />
          爱好：
          {this.state.hobby.map((value, key) => {
            return (
              <span key={key}>
                {value.title}{' '}
                <input
                  type="checkbox"
                  checked={value.checked}
                  onChange={this.handleHobby.bind(this, key)}
                />
              </span>
            );
          })}
          <br />
          备注：<textarea className="myInput" name="" id="" cols="30" rows="10" value={this.state.remark} onChange={this.handleRemark}></textarea>
          <br/>
          <input type="submit" defaultValue="提交" name="" id="" />
        </form>
      </div>
    );
  }
}

export default FormDemo;
