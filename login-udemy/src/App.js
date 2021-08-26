import { useState, useEffect } from "react";


const App = () => {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  // Component did Upadte
  useEffect(() => {
    console.log(' useEffect - did Update');
  });

  // componetDidMount
  useEffect(() => {
    // we can call some API
    console.log('useEffect - componetDidMount');
    
    // WillUnmount
    return () => {
      console.log('useEffect - WillUnmount');
    }
  }, []);

  useEffect(() => {
    console.log('useEffect - Name was updated');
  }, [name]);

  useEffect(() => {
    console.log('useEffect - Age was updated');
  }, [age]);

  useEffect(() => {
    console.log('useEffect - Name or Age was updated');
  }, [name, age]);


  
  return (
    <div>
      <h1>React component life cycle</h1>
      <label>Name</label>
      <input value={name} onChange={({target: {value}}) => setName(value)}></input>
      <br></br>
      <br></br>
      <label>Age</label>
      <input value={age} onChange={({target: {value}}) => setAge(value)}></input>
    </div>
  )
  

}

export default App;