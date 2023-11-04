import React from 'react';
import ToDoList from './ToDoList'
import TodoProvider from "./TodoProvider";

function App (){
  return (
    <TodoProvider>      
      <ToDoList />
    </TodoProvider>    
  )
}

export default App;
