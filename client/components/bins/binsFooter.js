import React, { Component } from 'react';

class BinsFooter extends Component {
  onShareClick() {
    console.log(this.refs.email.value);
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
      </footer>
    );
  }
}

export default BinsFooter;
