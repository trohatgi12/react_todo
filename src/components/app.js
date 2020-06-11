import React from "react";

const styles = {
    fontSize: 20,
    fontFamily: "Verdana",
    color: 'blue',
    display: 'flex',
    alignItems: 'center',
}

const ToDoItem  = () => <div style={styles}><input id = 'todo' type="checkbox"/><p>Item </p></div>

function App(){
    return (
        <div>
            <ToDoItem />
            <ToDoItem />
            <ToDoItem />
        </div>
    )
}

export default App