import React, { Component } from "react";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Priya"
    };
  }

  changeText = () => {
    this.setState({
      name: "Sushanta Dasgupta"
    });
  };
  render() {
    return (
      <div>
        <h1> Hello {this.state.name}</h1>
        <button onClick={() => this.changeText()}> Change Text</button>
      </div>
    );
  }
}

export default Message;
