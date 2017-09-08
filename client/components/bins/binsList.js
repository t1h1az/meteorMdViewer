import React, { Component } from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Bins} from '../../../imports/collections/bins';
import { Link } from 'react-router';

class BinsList extends Component {
  onBinRemove(bin) {
    Meteor.call('bins.remove', bin);
  }

  renderList() {
    return this.props.bins.map(bin => {
      const url = `/bins/${bin._id}`;
      links = <Link to={url}>Bin {bin._id}</Link>;

      return (
        <div className="col-xs-9 pull-right">
          <li
            className="list-group-item"
            key={bin._id}>
            {links}
            <span className="pull-right">
              <Link
                to={url}
                className="btn btn-success">
                View
              </Link>
              <button
                className="btn btn-danger"
                onClick={() => this.onBinRemove(bin)}>
                Remove
              </button>
            </span>
          </li>
        </div>
      );
    });
  }

  render() {
    console.log(this.props.bins);
    return (
      <ul className="list-group">
        {this.renderList()}
      </ul>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('bins');
  Meteor.subscribe('sharedBins');

  return { bins: Bins.find({}).fetch()}
}, BinsList);
