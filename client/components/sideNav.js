import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

class SideNav extends Component {
  render() {
    return (
      <div className="col-xs-2">
        <ul className="list-group">
          <Link to="/" className="list-group-item">Home</Link>
          <li className="list-group-item">Users</li>
          <li className="list-group-item">Bins</li>
        </ul>
      </div>
    );
  }
}
export default SideNav;
