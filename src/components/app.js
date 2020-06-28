import React from "react";
import todosData from "../todoData";
import TodoList from './todoList';

class App extends React.Component{
    constructor() {
        super();
        this.state = {
            todos: todosData,
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id){
        this.setState(prevState =>
        {
            const newToDos = prevState.todos.map(todo => {
                if (todo.id === id){
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: newToDos
            }
        })
    }

    render() {
        const ToDo = this.state.todos.map(todo => <TodoList key = {todo.id} todo = {todo} handleChange = {this.handleChange}/>)

        return (
            <div className="todo-list">
                <h1>Todo List</h1>
                {ToDo}
            </div>
        )
    }
}

export default App