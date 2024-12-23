import React, { useState, useContext } from 'react';
import ToDoContext from '../context/ToDoContext';

export default function TodoList() {
    const { todos, deleteTodo, updateTodo } = useContext(ToDoContext);


    const [editText, setEditText] = useState('');
    const [editingId, setEditingId] = useState(null); 

    const handleDelete = (id) => {
        deleteTodo(id); 
    };

    
    const handleStartEdit = (id, text) => {
        setEditingId(id); 
        setEditText(text); 
    };

 
    const handleUpdate = () => {
        if (editText.trim() !== '') {
            updateTodo(editingId, editText); 
            setEditText(''); 
            setEditingId(null); 
        }
    };

    return (
        <div >
            {todos?.map((todo) => (
                <div  key={todo.id}>
                    <p>{todo.todoText}</p>

                    <button onClick={() => handleDelete(todo.id)}>Delete</button>
                    {editingId === todo.id ? (
                        <div >
                         

                            <input
                                type="text"
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)} // Update the text as user types
                                placeholder="Edit Todo"
                            />
                            <button  onClick={handleUpdate}>Submit Update</button>
                        </div>
                    ) : (
                        <button onClick={() => handleStartEdit(todo.id, todo.todoText)}>
                            Update
                        </button>
                    )}

                   
                </div>
            ))}
        </div>
    );
}
