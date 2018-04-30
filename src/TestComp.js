import React, { Component } from 'react';

class TestComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'default message',
    };
  }
  render() {
    return (
      <div>
        <div className="message">
          { this.props.message || this.state.message }
        </div>
      </div>
    );
  }
}

export default TestComp;