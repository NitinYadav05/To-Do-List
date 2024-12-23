import React, { useState } from 'react';
import ToDoContext from './ToDoContext';  

export default function ContextProvider({ children }) {
    const [todos, setTodos] = useState([]); 

    
    const addtodo = (text) => {
        if (!text) {
            console.warn('Attempted to add a todo with no text');
            return null;
        }
        const todo = {
            todoText: text,
            isComplete: false,
            id: Date.now(),  
        };
        setTodos((prev) => [...prev, todo]);  
    };

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));  
    };

   
    const updateTodo = (id, updatedText) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, todoText: updatedText } : todo  
            )
        );
    };

   
    return (
        <ToDoContext.Provider value={{ addtodo, deleteTodo, updateTodo, todos }}>
            {children}  
        </ToDoContext.Provider>
    );
}
