import React, { useState } from 'react';
import './Todo.css';
import {Button, List, ListItem,ListItemText,Modal} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import db from './firebase'

const useStyles=makeStyles((theme)=>({
    paper:{
        position:'absolute',
        align:'center',
        width:400,
        backgroundColor:theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2,4,3),
    },
    box:{
        margin:'10% 25%',
    },
    button:{
        margin:'2%'
    }
}));

function Todo(props) {
    const classes= useStyles();
    const [openModal,setOpen]=useState(false);
    const [input,setInput]=useState(props.todo.text);
    const handleOpen=()=>{
        setOpen(true);
    }
    const updateTodo =()=>{
        db.collection('todos').doc(props.todo.id).set({
            text:input
        },{merge:false});
        setInput('');
        setOpen(false);
    }
    return (
        <>
            <Modal open={openModal} onClose={e=>setOpen(false)} className={classes.box}>
                <div className={classes.paper}>
                    <h1>This is a modal</h1>
                    <input value={input} onChange={e=>setInput(e.target.value)}/>
                    <Button variant="contained" className={classes.button} color="primary" onClick={updateTodo}>Update</Button>
                    <Button variant="contained" className={classes.button} color="primary" onClick={e=>setOpen(false)}>Close</Button>
                </div>
            </Modal>
            <List className="todo__list">
                <ListItem>
                    <ListItemText primary={props.todo.text}></ListItemText>
                </ListItem>
                <Button onClick={e=>setOpen(true)} variant="contained" color="primary">Edit</Button>
                <Button onClick={event=>(db.collection('todos').doc(props.todo.id).delete())} >❌Delete</Button>
            </List>
        </>
    )
}

export default Todo;
