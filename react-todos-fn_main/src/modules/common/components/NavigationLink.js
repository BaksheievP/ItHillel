import React from "react";

function NavigationLink({path, label, curerntPath, navigate}) {
    return (
        <a className={
            'button' +
            (curerntPath === path ? " button-primary" : "")}
            href="#"
            onClick={() => navigate(path)}
        >
            {label}
        </a>
    )
        }

    export default NavigationLink;  
