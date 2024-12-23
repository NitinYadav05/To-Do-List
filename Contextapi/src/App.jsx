import React from "react";
import ContextProvider from "./context/ContextProvider.jsx"; 
import TodoInput from "./Components/ToDoInput.jsx"; 
import TodoList from "./Components/todoList.jsx"; 
function App() {
  return (
    <ContextProvider>
      <TodoInput />
      <TodoList />
    </ContextProvider>
  );
}

export default App;