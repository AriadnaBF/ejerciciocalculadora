import React from "react";

const Result = (props) => {
  return (
    <div className="result-box">
      {props.operation}
      {props.result}
    </div>
  );
};

export { Result };
