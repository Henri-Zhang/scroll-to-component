import React, { Component } from 'react';

class B extends Component {
  render() {
    return (
      <h1
        style={{
          height: 400,
          width: '100%',
          fontSize: '24px',
          textAlign: 'center',
          background: 'aliceblue'
        }}
      >
        {this.props.text}
      </h1>
    );
  }
}

export default B;
