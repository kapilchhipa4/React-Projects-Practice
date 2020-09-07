import React from 'react';
import './App.css';
import todoData from './todoData'
import TodoItem from './components/TodoItem';
class  App extends React.Component {

  constructor(){
    super();
    this.state = {
      todos : todoData , 
      name: "kapil" 
    }
    this.handleChange = this.handleChange.bind(this)
    // when we create a function in class and want to call setState method
    // we have to bind it with class inside constructor
  }
  // Life cycle method
  componentDidMount(){
    console.log("hey")
    // will execute once when page loaded
    //get data from external source
  }
  // componentWillReceiveProps(){
  //   console.log("hii")
  // }
  componentDidUpdate(){
    console.log("hhhhhh")
    //whenever some update occur
  }
  static getDerivedStateFromProps(){
    // return the new, updated state based upon the props
  }
  getSnapshotBeforeUpdate(){
    // create a backup of the current way thing are
  }
  UNSAFE_componentWillReceiveProps (nextProps){
    console.log("componentwillreceiveprops")
  }
  shouldComponentUpdate(nextProps, nextState){
    return true;
    // return true if we want to update or false
  }
  componentWillUnmount(){
    // clean up or tear down work ex removeEventListener
  }
  handleChange(id){
    
      this.setState(prevState => {
        const updatedTodos = this.state.todos.map(todo => {
          if(todo.id === id){
            todo.completed = !todo.completed
          } 
          return todo
        })
         return { todos : updatedTodos} // we have to return updated state
         // only this key will change name will remain same
      })
  
  }
  render(){
    let todoitems = this.state.todos.map( (item) =>{
      return <TodoItem handleChange = {this.handleChange} key = {item.id} item = {item}> </TodoItem>
    }) 
    return (
        <div>
          {todoitems}
        </div>
    )
  }
}


export default App;
