import React, { useReducer, createContext } from "react";
// import { useContext } from "react";
import { v4 as uuidv4 } from 'uuid';

const todosInitialState = { 
    todos:[{ id:1, text: "finishing writing hooks chapter"},
      { id:2, text: "play with kids"},
      { id:3, text: "read bible"}
    ]
};
  
function todosReducer(state, action){ 
    switch(action.type){     
      case 'add':
        const newToDo = {id: uuidv4(), text: action.payload}
        const addedToDos = [...state.todos,newToDo]
        return {...state,todos:addedToDos}
      case 'delete':
        const filteredTodoState = state.todos.filter( todo => todo.id !== action.payload.id)
        return {...state, todos: filteredTodoState}      
      default:
        return todosInitialState
    }
}

export const TodoContext = createContext();

// const TodoContext = createContext()
// export const useTodos = () => useContext(TodoContext);

export default function TodoProvider({children}) {

    const [state, dispatch] = useReducer(todosReducer,todosInitialState)

    return (
        <TodoContext.Provider value={{state,dispatch}}>
          {children}
        </TodoContext.Provider>
    );
}