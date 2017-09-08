import React, { Component } from 'react';
import { markdown } from 'markdown';

class BinsOutput extends Component {
  render() {
    const rawHTML = markdown.toHTML(this.props.bin.content);
    return (
      <div className="col-xs-5">
        <h5>Output</h5>
        <div dangerouslySetInnerHTML={{ __html: rawHTML}}></div> // susceptible for js xxs injection
      </div>
    );
  }
}

export default BinsOutput;
