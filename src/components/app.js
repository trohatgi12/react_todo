import React from "react";
import todosData from "../todoData";
import TodoList from './todoList';

class App extends React.Component{
    constructor() {
        super();
        this.state = {
            todos: todosData,
        }
    }
    render() {
        const ToDo = this.state.todos.map(todo => <TodoList key = {todo.id} todo = {todo}/>)

        return (
            <div className="todo-list">
                <h1>Todo List</h1>
                {ToDo}
            </div>
        )
    }
}

export default App