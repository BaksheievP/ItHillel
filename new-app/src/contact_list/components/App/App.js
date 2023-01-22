import React, { useEffect, useState } from "react";

import List from "../List/List";
import Form from "../Form/Form";
import { createItem, deleteItem, getList } from "../../../Contact services/contactService";

function App() {
    const [contactsList, setContactsList] = useState([]);

    useEffect(() => {
        getList().then((data) => setContactsList(data));
    }, []);

    function deleteContact(id) {
        deleteItem(id).then(() => {
            setContactsList(
                contactsList.filter((item) => item.id !== id)
            )
        })
    }
    function saveContact(contact) {
        if (contact.id) {
            updateContact(contact)
        }
        else {
            delete contact.id
            createContact(contact)
        }
    }
    function updateContact(contact) {
        console.log('update', contact)
    }
    function createContact(contact) {
        console.log(contact)
        createItem(contact).then((data) =>{
            setContactsList([...contactsList, data])
        });
    }


    return <div className="container">
        <List contacts={contactsList} onDelete={deleteContact} />
        <Form onSave={saveContact} />
    </div>
}

export default App;