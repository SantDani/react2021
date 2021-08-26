import { useState, useEffect } from "react";


const jsonData = [{
  key: "1",
  name: "Armando",
},
{
  key: "2",
  name: "Vegeta",
},
{
  key: "3",
  name: "Ricardo",
},
{
  key: "4",
  name: "Segura",
},
{
  key: "5",
  name: "Notion",
},
{
  key: "6",
  name: "Web Strorm",
}];

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout( () => {
      setIsLoading(false);
    }, 3000)
  },[])

  const renderData = () => {
    
    // if(isLoading) return <h2> Is loading ...</h2>
      

    return jsonData?.map((value) => (
      <div key={value.key}>
        <p>{value.name}</p>
      </div>
    ));
      
  };
  
  return (
    <div>
      <h1>List and keys</h1>
      { isLoading ? <h2> Is loading ...</h2> :  renderData()}
    </div>
  )
  

}

export default App;