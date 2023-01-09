import React from "react";
import './navigation.css'
import NavigationLink from "./NavigationLink";

function Navigation({ currentPath, navigate }) {
    return (
        <div className="navigation">
            <NavigationLink
                path="todos"
                label="Todos"
                curerntPath={currentPath}
                navigate={navigate}
            />
             <NavigationLink
                path="users"
                label="Users"
                curerntPath={currentPath}
                navigate={navigate}
            />
             <NavigationLink
                path="posts"
                label="Posts"
                curerntPath={currentPath}
                navigate={navigate}
            />
        </div>
            );      
}

            export default Navigation;