import React from 'react';
import './App.css';
import Joke from './components/Joke'
import jokesdata from './Jokesdata'
function App() {

  
   let d =    jokesdata.map( function(data) {
         return <Joke key = {data.id} question = {data.question } punchline = {data.punchline}></Joke>
      } );

      let arr = [1,2,3,4,5,6,7,8,9,10];
      let a = arr.filter(function(data)
      {
        return data%2==0;
      })
      console.log(a)
    
  return (
    
      <div>
        {d}
      </div>
    
  )
}

export default App;
