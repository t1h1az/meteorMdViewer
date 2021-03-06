import React, { Component } from 'react';
import Accounts from './accounts';
import { Link, browserHistory } from 'react-router';

class Header extends Component {
  onBinClick(event) {
    event.preventDefault();

    Meteor.call('bins.insert', (error, binId) => {
      browserHistory.push(`/bins/${binId}`); //push url into browser bar
    });
  }

  render() {
    return (
        <nav className="nav navbar-inverse">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">Markbin</Link>
          </div>
          <ul className="nav navbar-nav pull-right">
            <li>
              <a href="#" onClick={this.onBinClick.bind(this)}>Create bin</a>
            </li>
            <li>
              <Accounts />
            </li>
          </ul>
        </nav>
    );
  }
}

export default Header;
