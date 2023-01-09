import React from "react";
import TodoListItem from "./ToDoLisItem";

function TodosList({ todos, onToggle, onDelete }) {
    return (
        <div className="row">
            <div className="twelve columns">
                {todos.map(item => (
                    <TodoListItem
                        key={item.id}
                        todo={item}
                        onToggle={onToggle}
                        onDelete={onDelete}
                    />))}
            </div>
        </div>
    )
}

export default TodosList;