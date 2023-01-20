import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [check, setCheck] = useState(false);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  function show() {
    name === "" ? setCheck(false) : setCheck(true);
    // setCheck(true)
  }

  return (
    <div className="App">
      <span>Enter your name: </span>
      <input
        onChange={handleChange}
        className="myText"
        type="text"
        placeholder="Enter your name"
      />
      <button className="btn" onClick={show}>
        Login
      </button>

      {check && (
        <div>
          <h1>{`Hey ! ${name}`}</h1>
          <h2>Welcome to Lpu College</h2>
        </div>
      )}
      <p>Assignment done by Gaurav - your college id- 12009118</p>
    </div>
  );
}

export default App;
