import React from "react";
import ListBody from "../ListBody/ListBody";
import ListHeader from "../ListHeader/ListHeader";
function List({ contacts, onDelete }) {
    return (
        <div>
            <ListHeader />
            <ListBody contacts={contacts} onDelete={onDelete} />
        </div>
    )
}

export default List