import React, { Component } from 'react';

class BinsFooter extends Component {
  onShareClick() {
    const email = this.refs.email.value;
    Meteor.call('bins.share', this.props.bin, email);
  }

  renderSharedList() {
    return this.props.bin.sharedWith.map(email => {
      return (
        <button
          className="btn btn-default"
          key={email}>
          {email}
        </button>
      );
    });
  }

  render() {
    return (
      <footer className="bins-share">
         <div className="input-group">
           <div className="col-xs-8">
             <input ref="email" className="form-control col-xs-4" />
           </div>
           <div className="col-xs-2" placeholder="Enter users email">
             <button className="btn btn-default" onClick={this.onShareClick.bind(this)}>
               Share
             </button>
           </div>
         </div>
         <div>
           Shared with:
         </div>
         <div className="btn-group">
           {this.renderSharedList()}
         </div>

      </footer>
    );
  }
}

export default BinsFooter;
