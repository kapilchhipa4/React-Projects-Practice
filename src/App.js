import React from 'react';
import './App.css';
import todoData from './todoData'
import TodoItem from './components/TodoItem';
function App() {

  let todoitems = todoData.map( (item) =>{
    return <TodoItem key = {item.id} item = {item}> </TodoItem>
  })    
  return (
    
      <div>
        {todoitems}
      </div>
    
  )
}

export default App;
