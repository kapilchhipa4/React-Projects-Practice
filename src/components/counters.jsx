import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {

  state = {
      counters :[
        {id:1, value:0},
        {id:2, value:2},
        {id:3, value:3},
        {id:4, value:34}
      ]
  };
  render() {
    return (
      <div>
        
        <button 
          onClick = {this.handleReset}
          className = "btn btn-primary btn-sm m-2"
          >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            onIncrement = {this.handleIncrement}
            key={counter.id}
            onDelete={this.handleDelete}
            counter={counter}
          />
        ))}
      </div>
    )
  }
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
}

export default Counters;
