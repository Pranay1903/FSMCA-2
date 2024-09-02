import { useState } from "react";//learning useState hook
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);

  const addValue = () => {
    // counter=counter+1;
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>Hello Pranay</h1>
      <h2>Count value: {counter}</h2>
      <button onClick={addValue}>Add Count</button>
      <br />
      <button onClick={removeValue}>Remove Count</button>
    </>
  );
}

export default App;
