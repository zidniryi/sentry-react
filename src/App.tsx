import React, { useState } from 'react';
import './App.css';

function App() {
  const [firstNumber, setFirstNumber] = useState(0)
  const [secondNumber, setSecondNumber] = useState(0)
  const [resultNumber, setResultNumber] = useState(0)

  const sumNumber = () => {
    const sumData = firstNumber + secondNumber
    setResultNumber(sumData)
  }
  return (
    <div className="App">
      <h1>Count Sum App</h1>
      <form>
        <label>First Number </label>
        <input type="number" value={firstNumber} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstNumber(parseInt(e.target.value))} />
        <label >Secon Number</label>
        <input type="number" value={secondNumber} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSecondNumber(parseInt(e.target.value))} />

        <input type="button" value="Calculate" style={{ backgroundColor: '#1756A1' }} onClick={sumNumber} />
        {/* Uncoment this if you want to know the errors  from sentry*/}
        {/* <input type="button" value="Wrong Method" style={{ backgroundColor: 'red' }} onClick={() => methodNotExist()} /> */}
        <br />
        <b>Result {resultNumber}</b>
        <br />
      </form>
    </div>
  );
}

export default App;
