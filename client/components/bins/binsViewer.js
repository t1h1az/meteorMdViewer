import React, { Component } from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Bins} from '../../../imports/collections/bins';
import BinsEditor from './binsEditor';
import BinsOutput from './binsOutput';
import BinsFooter from './binsFooter';

class BinsViewer extends Component{
  render() {
    //bin is found after the BinsEditor call
    //therefore the editor is always empty
    //if check
    if (!this.props.bin) {
      //good place for spinner component, splash screen
      return <div>Loading...</div>;
    }
  //  console.log(this.props.params.binId);
    return (
     <div className="col-xs-9 pull-right">
        <BinsEditor bin={this.props.bin} />
        <BinsOutput bin={this.props.bin} />
        <BinsFooter bin={this.props.bin} />
      </div>
    );
  }
}

export default createContainer((props) => {
  const { binId } = props.params;
  Meteor.subscribe('bins');
  Meteor.subscribe('sharedBins');

  return { bin: Bins.findOne(binId)};
}, BinsViewer);
