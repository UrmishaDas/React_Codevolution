import React from "react";

/*
This is a Functional Component
*/

const Greet = props => {
  return (
    <div>
      <h1> This is a functional component </h1>
      <h2>Hello {props.name} </h2>
      {props.children}
    </div>
  );
};

export default Greet;
