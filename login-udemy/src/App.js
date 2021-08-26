import { useState, Component } from "react";


class App extends Component{

  // props is a good practique
  constructor(props){
    super(props);
    console.log('I am the constructor');

    /* Is usefull declare constructor  if 
    we will create variables of state */

    this.state = {
      name: "",
    };

  }

  componentDidMount(){
    console.log('I am the componentDidMount()');
  
  }

  // snapshot value that return getSnapshotBeforeUpdate
  componentDidUpdate(prevProps, prevState, snapshot){
    
    console.log('I am the componentDidUpdate()');
  }

  shouldComponentUpdate(){
    
    console.log('I am the shouldComponentUpdate()');
    // return false not render
    // return true render
    // It is used for optimitze 
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('I am the getSnapshotBeforeUpdate()');
    console.log('prevProps ', prevProps);
    console.log('prevState ', prevState);
  }

  render(){
    return (
      <div>
        <h1>React component life cycle</h1>
        <input value={this.state.name} onChange={({target: {value}}) => this.setState({name: value})}></input>
      </div>
    )
  }

}

export default App;