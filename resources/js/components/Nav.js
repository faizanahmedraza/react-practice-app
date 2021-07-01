import React from "react";
import {Link} from "react-router-dom";

export default function Nav() {
    return (
            <div className="navBar">
                <ul>
                    <li>
                        <Link to={"/apply"}>Apply</Link>
                    </li>
                    <li>
                        <Link to={"/career"}>Career</Link>
                    </li>
                    <li>
                        <Link to={"/industry-data"}>Industry Data</Link>
                    </li>
                    <li>
                        <Link to={"/investors"}>Investors</Link>
                    </li>
                    <li>
                        <Link to={"/contact-us"}>Contact Us</Link>
                    </li>
                    <li>
                        <Link to={"/about-us"}>About Us</Link>
                    </li>
                </ul>
                <div className="member-login">
                    <button className="btn btn-primary">Member Login</button>
                </div>
            </div>
    );
}