import React from "react";
import ListItem from "../ListItem/ListItem";

function ListBody({ contacts, onDelete }) {
    return (
        <div>
            {contacts.map((item) => (
                <ListItem key={item.id} contact={item} onDelete={onDelete} />
            ))}

        </div>
    );
}
export default ListBody