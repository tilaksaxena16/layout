import React from "react";
import "./Maincontent.css";

const Maincontent = (user) => {

    return (
        <>
            <div className="maincontent-container">
                <div className="width20">
                    <label className="main-div-home">{user.name}</label>
                </div>
                <div className="width20">
                    <label className="main-div-updated">Updated 3 weeks ago</label>
                </div>
                <div className="width20">
                    <div className="main-div-publish-container">
                        <label className="main-div-publish-text">Published</label>
                    </div>
                </div>
                <div className="width20 child-div-container">
                    <div>
                        <label className="main-div-joe">Joe Bloggs</label>
                    </div>
                    <div className="main-div-admin-container">
                        <label className="main-div-admin-text">Admin</label>
                    </div>
                </div>
                <div className="width20">
                    <label>...</label>
                </div>
            </div>
        </>
    )
}

export { Maincontent }