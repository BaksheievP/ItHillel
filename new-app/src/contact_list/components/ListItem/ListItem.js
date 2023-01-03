import React from "react";

function ListItem({ contact: {id, name, surname, email }, onDelete }) {
    return (
        <div className="row">
            <div className="three columns">{name}</div>
            <div className="three columns">{surname}</div>
            <div className="three columns">{email}</div>
            <button onClick={() => onDelete(id)}>Delete</button>
            {/* <button>Edit</button> */}

        </div>
    )
}

export default ListItem