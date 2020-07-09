import React from "react";

const ShowHistory = (props) => {
  return (
    <ul>
      {props.history.map((value) => (
        <li>{value}</li>
      ))}
    </ul>
  );
};

export { ShowHistory };
