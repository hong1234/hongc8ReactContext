import React, { useContext, useState } from 'react'
import { Table, Form, Button } from 'react-bootstrap'
import { TodoContext } from './TodoProvider'
// import { useTodos } from "./TodoProvider";

function ToDoList(){
    
    const {state, dispatch} = useContext(TodoContext);
    // const { state, dispatch } = useTodos();

    const [todoText, setTodoText] = useState("")    

    const handleSubmit = event => {
        event.preventDefault();
        dispatch({type: 'add', payload: todoText})           
        setTodoText("")
    }
      
    return(
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">                
                    <Form.Control 
                        type="text" 
                        placeholder="Enter To Do" 
                        value={todoText}
                        onChange={event => setTodoText(event.target.value)}
                    />
                </Form.Group> 
                <Button variant="primary" type="submit">Add</Button>                               
            </Form>

            <Table striped bordered hover>
            <thead>
                <tr>                
                    <th>To Do</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
            {state.todos.map(todo =>(
                <tr key={todo.id}>                        
                    <td>{todo.text}</td>
                    <td onClick={() => dispatch({type:'delete',payload:todo})}>Delete</td>
                </tr>
            ))}                
            </tbody>
            </Table>            
        </div>
    )
}

export default ToDoList;
