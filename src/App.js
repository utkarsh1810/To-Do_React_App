import React, {useEffect, useState} from 'react';
import './App.css';
import { Button, InputLabel, Input, FormControl } from '@material-ui/core';
import Todo from './Todo';
import firebase from 'firebase';
import db from './firebase';

function App() {
  
  const [todos, setTodo]=useState([]);
  const [input,setInput]=useState('');
  
  useEffect(()=>{
      // this code fires  when the app.js loads
      db.collection('todos').orderBy('text','desc').onSnapshot(snapshot => {
        console.log(snapshot.docs.map(doc=>doc.data())); 
        setTodo(snapshot.docs.map(doc=>({id:doc.id,text:doc.data().text,time:doc.data.timestamp})));
      });
  },[]);
  
  //this is the function to add new items in the to-do list
  const addTodo = (e)=>{
    e.preventDefault(); //  this will stop thr refresh
    db.collection('todos').add({
      text: input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    });
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
          <Todo todo={todo}/> 
        ))}
      </ul>
    </div>
  );
}

export default App;
