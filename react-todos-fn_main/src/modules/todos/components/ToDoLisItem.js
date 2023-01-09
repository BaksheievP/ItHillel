import React from "react";
import './ToDoListItem.css'
function TodoListItem({ todo: { id, title, isDone }, onToggle, onDelete }) {
    function onDeleteClick(e){ 
        e.stopPropagation();
        onDelete(id)
    }

    return (
        <div className={"u-full-width todo-item " + (isDone ? "done" : "")}
            onClick={() => onToggle(id)}
        >
            {title}
        <span className="delete-btn" onClick={onDeleteClick}>
                X
            </span>
        </div>
    )
}

export default TodoListItem;