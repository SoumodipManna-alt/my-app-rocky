import React, { useState } from "react";

function Math(props) {
  return (
    <div>
      <h1>{props.n1 + props.n2}</h1>
    </div>
  );
}

function Print() {
  const [input, setinput] = useState("0");
  const [displat, set]=useState("")
  const update = () => {
    set(input);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setinput(e.target.value)}
        placeholder="Enter a value" // Optional: Add a placeholder for clarity
      />
      <button onClick={update}>Submit</button>
      <h1>{displat}</h1>
    </div>
  );
}

export default Print;
