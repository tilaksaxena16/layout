import React from "react";
import "./Sidebaritems.css";

const Sidebaritems = (user) => {

    return (
        <>
            <div className="sideitem-layout">
                <div className="sidebar-icon-size">
                    <i className="fa-solid fa-house"></i>
                </div>
                <div className="sidebar-item-name">
                    <label>{user.name}</label>
                </div>
            </div>
        </>
    )
}

export { Sidebaritems }