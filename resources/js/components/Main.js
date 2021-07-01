import React from "react";
import ReactDom from "react-dom";
import TopBar from "./TopBar";
import Footer from "./Footer";
import Home from "./Home";
import Apply from "./Apply";
import Career from "./Career";
import IndustryData from "./IndustryData";
import Investor from "./Investor";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

export default function Main() {
    return (
        <div className="bg_body">
            <div className="page-container">
                <Router>
                    <TopBar/>
                    <Switch>
                        <Route path={"/"} exact>
                            <Home/>
                        </Route>
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
                </Router>
                <Footer/>
            </div>
        </div>
    );
}

ReactDom.render(
    <Main/>,
    document.getElementById('root')
);