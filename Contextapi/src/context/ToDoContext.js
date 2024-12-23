import React from 'react';


const ToDoContext = React.createContext({
    todos: [],
    addtodo: () => {},
});

export default ToDoContext;  