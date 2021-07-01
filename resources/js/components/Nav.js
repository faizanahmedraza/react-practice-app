import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Apply from "./Apply";
import Career from "./Career";
import IndustryData from "./IndustryData";
import Investor from "./Investor";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";

export default function Nav() {
    return (
        <Router>
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

                <Switch>
                    <Route path={"/apply"}>
                        <Apply/>
                    </Route>
                    <Route path={"/career"}>
                        <Career/>
                    </Route>
                    <Route path={"/industry-data"}>
                        <IndustryData/>
                    </Route>
                    <Route path={"/investors"}>
                        <Investor/>
                    </Route>
                    <Route path={"/contact-us"}>
                        <ContactUs/>
                    </Route>
                    <Route path={"/about-us"}>
                        <AboutUs/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}