import {useState} from "react";
import {Component} from "react";



function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => setEmail(event.target.value);

  
  const handlePsswordChange = ({target:{value}}) => setPassword(value);
  

  const handleFormSubmit = (event) =>{
    event.preventDefault(); 
    console.log('submit');
    console.log(email);
    console.log(password);
    alert(`Usuerio: ${email}, Password: ${password}`)

    
  }
  
  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
      <h2>Log in</h2>

      <label>
        login
        <input type="email" value={email} onChange={handleEmailChange}></input>
      </label>
      <label>
        password
        <input type="password" value={password} onChange={handlePsswordChange}></input>
      </label>

      <button type="submit"> Enter</button>
      </form>
    </div>
  );
}

export default App;
