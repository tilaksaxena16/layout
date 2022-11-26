import React from "react";
import "./Nav.css";

const Nav = () => {

    return (
        <>
            <div className="nav-container">
                <div className="width20">
                    <label className="nav-pagetitle">Page title</label>
                </div>
                <div className="width20">
                    <label className="nav-created">Created</label>
                </div>
                <div className="width20">
                    <label className="nav-status">Status</label>
                </div>
                <div className="width20">
                    <label className="nav-author">Author</label>
                </div>
                <div className="width20">
                    <div className="navbutton">
                        <i className="fa-solid fa-file-circle-plus navbutton-logo"></i>
                        <label className="navbutton-text">Add new</label>
                    </div>
                </div>
            </div>
            <div className="border"></div>
        </>
    )
}

export { Nav }