import React from "react";

function Form({ onSave }) {
    function onFormSubmit(e) {
        e.preventDefault();
const form = e.target.elements
        onSave({
            id: form.id.value,
            name: form.name.value,
            surname: form.surname.value,
            email: form.email.value
        });
        e.target.reset();
        console.log(onSave)
    }
    return (
        <div className="row">
            <form onSubmit={onFormSubmit}>
                <div className="three columns">
                <input name="id" type="hidden"/>
                    <input name="name" type="text" placeholder="name" />
                </div>
                <div className="three columns">
                    <input name="surname" type="text" placeholder="surname" />
                </div>
                <div className="three columns">
                    <input name="email" type="text" placeholder="email" />
                </div>
                <div className="three columns">
                    <button>Save</button>
                </div>
            </form>
        </div>
    )
}

export default Form;