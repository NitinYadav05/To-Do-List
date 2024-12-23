import React, { useState, useContext } from 'react';
import ToDoContext from '../context/ToDoContext';

export default function TodoInput() {
    const [input, setInput] = useState(""); 

    const { addtodo } = useContext(ToDoContext);

    const handleAddTodo = (e) => {
        e.preventDefault();

        if (input.trim()) { 
            addtodo(input);
            setInput(""); 
        }
    };

    return (
        <div >

            <form onSubmit={handleAddTodo}>
                <input 
                    type="text"
                    value={input} 
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="ENTER A TODO TASK"
                />
                <button  type="submit">ADD TASK</button>
            </form>
        </div>
    );
}