import React, { useEffect, useState } from "react";

import List from "../List/List";
import Form from "../Form/Form";
import { deleteItem, getList } from "../../../Contact services/contactService";

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

return <div className="container">
    <List contacts={contactsList} onDelete={deleteContact} />
    <Form />
</div>
}

export default App;