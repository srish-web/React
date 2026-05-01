import {useState} from "react";
import "./todo.css";
import {v4 as uuidv4} from 'uuid';

export default function TodoList(){
    let [todos, setTodos] = useState([{task: "sample-task", id: uuidv4(), isDone: false}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () =>{
        setTodos((prevTodo)=>{
            return [...prevTodo, {task: newTodo, id: uuidv4(), isDone: false}];
        });
        setNewTodo("");
    };
    let UpdateTodo = (event)=>{
        setNewTodo(event.target.value);
    };
    let deleteTodo = (id)=>{
        setTodos(todos.filter((todo)=> todo.id != id));
        
    };
    let doneTask = (id)=>{
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{
                if(todo.id == id){
                    return {
                        ...todo,
                        isDone: !todo.isDone,
                    };
                } else{
                    return todo;
                }
            })
        );
    };
    return(
        <div className="todo-List">
            <input type="text" value={newTodo} placeholder="add a task" onChange={UpdateTodo} className="input"/>
            <button onClick={addNewTask} className="addTask">Add Task</button>
            <h4 className="List">Todo List</h4>
            <ul className="ul-List">
                {
                    todos.map((todo) => {

                        return(
                            <li key={todo.id} className="todo">
                                <button className={`done ${todo.isDone ? "donebtn" : ""}`} onClick={()=>doneTask(todo.id)}>{
                                    `${todo.isDone? "✓":""}`}</button>
                                <span className={`task ${todo.isDone ? "doneTask" : ""}`}>{todo.task}</span>
                                <button className="del" onClick={()=>deleteTodo(todo.id)}>Delete</button>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}