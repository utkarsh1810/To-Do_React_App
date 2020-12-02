import React, {useState} from 'react';
import './App.css';
import { Button, InputLabel, Input, FormControl } from '@material-ui/core';

function App() {
  const [todos, setTodo]=useState(['Take a look on AI Course','Take a look on Java Course','I have to live stream today']);
  const [input,setInput]=useState('');
  //this is the function to add new items in the to-do list
  const addTodo = (event)=>{
    event.preventDefault(); //  this will stop thr refresh
    setTodo([...todos,input]);
    setInput('');
  };
  return (
    <div className="App">
      <h1>My To-Do List</h1>
      <form>
        <FormControl>
          <InputLabel>✅Write a To-Do</InputLabel>
          <Input value={input} onChange={event=>setInput(event.target.value)}/>
        </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">Add To-Do</Button>
      </form>
      <ul>
        {todos.map(todo=>(
          <Todo todoText={todo}></Todo> 
        ))}
      </ul>
    </div>
  );
}

export default App;
