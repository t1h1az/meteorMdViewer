import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/markdown/markdown'; // code in import is executed

class BinsEditor extends Component {
  //content comes from codemirror
  onEditorChange(content) {
    Meteor.call('bins.update', this.props.bin, content);
  }
  render() {
    return (
      <div className="col-xs-8">
        <h5>Input markdown</h5>
        <CodeMirror
          options={{mode: 'markdown', lineNumbers: true}}
          onChange={this.onEditorChange.bind(this)} />
      </div>
    );
  }
}
export default BinsEditor;
