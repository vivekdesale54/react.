import React from 'react';
import { useState } from 'react';


const TodoList = () => {
    const[todos, setTodos] = useState([]);

    const addTodos = () => {
        const newTodo = prompt("Enter a new todo item:");
        setTodos([...todos, newTodo]);
    }
 

    return (
        <div>
            <form action="add-todo-items">Todos: {todos}</form>
            <button onClick={addTodos}>Add items</button>
        </div>
    )
}

export default TodoList;