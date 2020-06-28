import React from "react";

function TodoList(props){
    return (
        <div className="todo-item">
            <input id={props.todo.id} type="checkbox" checked={props.todo.completed} onChange={()=>props.handleChange(props.todo.id)}/>
            <label htmlFor={props.todo.id} style={{
                textDecoration: props.todo.completed ? 'line-through': 'none',
                color: props.todo.completed ? 'gray': 'black',
                fontStyle: props.todo.completed ? 'italic': 'normal',
            }}
            >{props.todo.text}</label>
        </div>
    )
}
//The styling could have been done seperately in a new part too
export default TodoList;