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


function AppUseState(){
  // tecnica de etma


  const [name, setName] = useState("Ricardo");
  //If not need setter not declare
  // we can send a atribute, object or array.
  const [age] = useState([{}]);
  //I send "Dany" for cnahge value later
  const [,setSomething] = useState("Dany");

  const handleHeyClick = () => {
    setName('Toreto');
    console.log('click');
  }
  return(
    <div>
      <h1>Hello {name}!!</h1>
      <h1>My hage is {age}</h1>
      <button onClick={handleHeyClick}>Change name</button>
    </div>
  );

}

// export default App;
export default AppUseState;
