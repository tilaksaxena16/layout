import React from "react";
import "./Sidebarheading.css";

const Sidebarheading = (user) => {

    return (
        <>
            <div className="sidebar-heading-container">
                <label>{user.name}</label>
            </div>
        </>
    )
}

export { Sidebarheading }