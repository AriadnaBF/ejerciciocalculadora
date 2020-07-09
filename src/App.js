import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Result } from "./components/Result";
import { CalcButton } from "./components/Button";
import { ShowHistory } from "./components/ShowHistory";
import { Container, Col, Row, ButtonGroup } from "reactstrap";

function App() {
  const [result, setResult] = useState("");
  const [expression, setExpression] = useState("");
  const [history, setHistory] = useState([]);
  const [multiple, setMultiple] = useState("");

  const handleExpression = (event) => {
    const resultvalue = result;
    setResult("");
    setExpression(resultvalue + expression + event.target.value);
  };

  const handleResult = () => {
    if (!expression.match(/\d+[+-]\d/)) {
      return;
    }

    let showresult = eval(expression);
    setResult(showresult);

    setHistory([...history, `${expression} = ${showresult}`]);
    setMultiple(multiple + expression);
    setExpression("");
  };

  const resetCalculator = () => {
    setExpression("");
    setResult("");
    setMultiple("");
    setHistory([]);
  };

  return (
    <Container>
      <Row>
        <Col xs="4" className="mx-auto">
          <Row className="d-flex flex-column">
            <div>
              <ShowHistory history={history} />
            </div>
            <div>
              <Result
                operation={expression}
                result={result}
                className="rounded"
              />
            </div>
          </Row>

          <Row className="d-flex flex-column ">
            <ButtonGroup>
              <CalcButton buttonaction={handleExpression} value={7} />
              <CalcButton buttonaction={handleExpression} value={8} />
              <CalcButton buttonaction={handleExpression} value={9} />
              <CalcButton
                buttonaction={resetCalculator}
                value={"C"}
                color="red"
              />
            </ButtonGroup>

            <ButtonGroup>
              <CalcButton buttonaction={handleExpression} value={4} />
              <CalcButton buttonaction={handleExpression} value={5} />
              <CalcButton buttonaction={handleExpression} value={6} />
              <CalcButton buttonaction={handleExpression} value={"-"} />
            </ButtonGroup>

            <ButtonGroup>
              <CalcButton buttonaction={handleExpression} value={1} />
              <CalcButton buttonaction={handleExpression} value={2} />
              <CalcButton buttonaction={handleExpression} value={3} />
              <CalcButton buttonaction={handleExpression} value={"+"} />
            </ButtonGroup>
            <ButtonGroup>
              <CalcButton buttonaction={handleExpression} value={"."} />
              <CalcButton buttonaction={handleExpression} value={0} />
              <CalcButton buttonaction={handleResult} value={"="} />
            </ButtonGroup>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
