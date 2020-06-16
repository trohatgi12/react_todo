import React from "react";

function TodoList(props){
    return (
        <div className="todo-item">
            <input id={props.todo.id} type="checkbox" checked={props.todo.completed}/>
            <label htmlFor={props.todo.id}>{props.todo.text}</label>
        </div>
    )
}

export default TodoList;