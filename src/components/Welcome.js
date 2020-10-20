import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <div>
        <h1> This is a class component </h1>
        <h2> Welcome {this.props.name} </h2>
        {this.props.children}
      </div>
    );
  }
}

export default Welcome;
