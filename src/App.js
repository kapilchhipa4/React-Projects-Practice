import React, { Component } from "react";
import "./App.css";
import Navbar from './components/navbar'
import Counters from './components/counters'
class App extends Component {
  state = {
    counters :[
      {id:1, value:0},
      {id:2, value:2},
      {id:3, value:3},
      {id:4, value:34}
    ]
};
handleReset = () =>{

  const counters = this.state.counters.map(counter => {
    counter.value = 0
    return counter
  })
  this.setState({counters})
}
handleIncrement = (counter) => {

  // const counters = [...this.state.counters]
  // const index = counters.indexOf(counter)
  // console.log(index)
  // counters[index] = {...counter}
  // counters[index].value++
  const counters = this.state.counters.map(c =>{
    if(c.id === counter.id)
    c.value = counter.value + 1;
    return c;
  })
  this.setState({counters})
}
handleDelete = (id) =>
{
  console.log(id)
  const counters = this.state.counters.filter( c=> c.id !== id)
  this.setState({counters})
}
  render() {
    return (
     <div>
        <Navbar totalCounters = {this.state.counters.filter( c => c.value > 0).length}></Navbar>
      <main className="container">
        <Counters onReset = {this.handleReset} onIncrement = {this.handleIncrement} 
        onDelete = {this.handleDelete} counters = {this.state.counters}/>
      </main>
      </div>
    );
  }
}

export default App;
