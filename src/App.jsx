import {Container, Content, Row} from "./Styles";
import Input from "./components/input";
import Button from "./components/button"; 
import {useState} from "react";

export default function App() {

  const [number, setNumber] = useState ("0");
  const [firstNumber, setFirstNumber] = useState ("0");
  const [operation, setOperation] = useState ("");

  const handleAddNumber = (number) => {
    setNumber (prev => `${prev === "0" ? "" : prev}${number}`);
  }

  const handleClear = () => {
    setNumber ("0");
    setFirstNumber ("0");
    setOperation ("");
  }

  const handleEqual = () => {
    if (firstNumber !== "0" && operation !== "" && number !== 0) {
      switch (operation) {
        case "+":
          handleSum ();
          break;
        case "-":
          handleMinus ();
          break;
        case "*":
          handleTimes ();
          break;
        case "/":
          handleDivide ();
          break;
        default:
          break;
      }
    }
  }

  const handleSum = () => {
    if (firstNumber === "0") {
      setFirstNumber (String(number));
      setNumber ("0");
      setOperation ("+");
    } else {
      const sum = Number (firstNumber) + Number (number);
      setNumber (String (sum));
      setOperation ("");
    }
  }

  const handleMinus = () => {
    if (firstNumber === "0") {
      setFirstNumber (String(number));
      setNumber ("0");
      setOperation ("-");
    } else {
      const sum = Number (firstNumber) - Number (number);
      setNumber (String (sum));
      setOperation ("");
    }
  }

  const handleTimes = () => {
    if (firstNumber === "0") {
      setFirstNumber (String(number));
      setNumber ("0");
      setOperation ("*");
    } else {
      const sum = Number (firstNumber) * Number (number);
      setNumber (String (sum));
      setOperation ("");
    }
  }

  const handleDivide = () => {
    if (firstNumber === "0") {
      setFirstNumber (String(number));
      setNumber ("0");
      setOperation ("/");
    } else {
      const sum = Number (firstNumber) / Number (number);
      setNumber (String (sum));
      setOperation ("");
    }
  }

  return (
    <Container>
      <Content>
        <h1> Calculadora de dois números </h1>
        <Input value = {number}/>
        <Row>
          <Button label="0" onClick={() => handleAddNumber("0")} />
          <Button label="x" onClick={handleTimes} />
          <Button label="/" onClick={handleDivide} />
          <Button label="C" onClick={handleClear} />
        </Row>
        <Row>
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="-" onClick={handleMinus} />
        </Row>
        <Row>
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="+" onClick={handleSum} />
        </Row>
        <Row>
          <Button label="3"onClick={() => handleAddNumber("3")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="=" onClick={handleEqual} />
        </Row>
      </Content>
    </Container>
  )
}