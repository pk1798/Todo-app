import { useState } from "react";
import shortid from "shortid";

const TodoForm = (props) => {

    const [newTodo, setNewTodo] = useState('')

    const handleNewTodo = (e) => {
        setNewTodo(e.target.value)
    }

    const getNewTodo = (e) => {
        e.preventDefault();
        const newTask = {task: newTodo, isCompleted: false, id: shortid.generate()}
        props.getNewTodo(newTask)
    }

    return ( 
        <div className="form">
            <form onSubmit={getNewTodo}>
                <input type="text" onChange={handleNewTodo} value={newTodo} placeholder="add new todo..."/>
                <button className="button-regular">Add</button>
            </form>
        </div>
     );
}
 
export default TodoForm;