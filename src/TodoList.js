import { useState } from "react";
import Navbar from "./Navbar";
import Todo from "./Todo";
import TodoForm from "./TodoForm"

const TodoList = () => {

    const [todos, setTodos] = useState([])
    const [todosToShow, setTodosToShow] = useState("all")
    let filteredTodos = [];

        
    if(todosToShow === "all"){
        filteredTodos = todos
       } else if(todosToShow === "active"){
           filteredTodos = todos.filter(todo => todo.isCompleted === false)
       } else if(todosToShow === "completed"){
           filteredTodos = todos.filter(todo => todo.isCompleted === true)
       }


    const handleGetTodo = (newTodo) => {
        setTodos([...todos, newTodo])
    }

    const handleShowList = (value) => {
        setTodosToShow(value)

    }

    const handleComplete = (id) => {
     setTodos(todos.map(todo => {
        if(todo.id === id){
            return  {
                ...todo,
                isCompleted : !todo.isCompleted
            }
        }else{
            return todo
        }
    }))
    }

    const removeTodo = (id) => {
        setTodos(todos.filter(todo=> todo.id !== id))
    }

    const removeAll = () => {
        setTodos([])
    }

    return ( 
      
        <div className="container">
            <h1>#todo</h1>
            <Navbar getShow={handleShowList} />
            {todosToShow !== "completed" &&  <TodoForm getNewTodo={handleGetTodo}/>}
            {filteredTodos.map(todo => (<Todo key={todo.id} todos={todo.task} toShow={todosToShow} id={todo.id} isCompleted={todo.isCompleted} isDone={handleComplete} remove={removeTodo}/>))}
            {todosToShow === "completed" && <button onClick={removeAll} className="button-danger delete"> delete all</button>}
        </div>
     );
}
 
export default TodoList;