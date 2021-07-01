import React from "react";
import Nav from "./Nav";

export default function TopBar() {
    return (
        <div className="topBar">
            <div className="logo">
                <a href="index.html"><img src="assets/images/logo.png" alt=""/></a>
            </div>
            <div className="sidebar-collapse">
                <span className="menu-bar"></span>
            </div>
            <Nav/>
        </div>
    );
}