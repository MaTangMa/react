import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import SetUserSeting from './SetUserSeting.js';
import SetSecuritySeting from './SetSecuritySeting';

class SetCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // 应用二级路由嵌套
  render() {
    return (
      <Router>
        <div>
          <br />
          <br />
          <Link to="/setCenter"> 用户设置 </Link>
          <Link to="/setCenter/securitySeting"> 安全设置 </Link>

          <Route exact path="/setCenter" component={SetUserSeting} />
          <Route path="/setCenter/securitySeting" component={SetSecuritySeting} />
        </div>
      </Router>
    );
  }
}

export default SetCenter;
