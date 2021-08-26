import { useState, Component } from "react";


const App = () => {

  const [name, setName] = useState("");

  return (
    <div>
      <h1>React component life cycle</h1>
      <input value={name} onChange={({target: {value}}) => setName(value)}></input>
    </div>
  )
  

}

export default App;