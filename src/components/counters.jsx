import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {

  
  render() {
    return (
      <div>
        
        <button 
          onClick = {this.props.onReset}
          className = "btn btn-primary btn-sm m-2"
          >
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            onIncrement = {this.props.onIncrement}
            key={counter.id}
            onDelete={this.props.onDelete}
            counter={counter}
            onDecrement = {this.props.onDecrement}
          />
        ))}
      </div>
    )
  }
  
}

export default Counters;
