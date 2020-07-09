import React from "react";
import { Button } from "reactstrap";

const CalcButton = (props) => {
  return (
    <Button
      color="info"
      onClick={props.buttonaction}
      value={props.value}
      className={props.color}
    >
      {props.value}
    </Button>
  );
};

export { CalcButton };
