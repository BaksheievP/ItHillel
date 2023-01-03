import React from "react";

function Form() {
    return (
        <div className="row">
            <div className="three columns">
                <input name="name" type="text" placeholder="name"/>
            </div>
            <div className="three columns">
                <input name="surname" type="text" placeholder="surname" />
            </div>
            <div className="three columns">
                <input name="email" type="text" placeholder="email"/>
            </div>
            <div className="three columns">
                <button>Save</button>
            </div>
            
        </div>
    )
}

export default Form;