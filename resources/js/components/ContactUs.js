import React from "react";

export default function ContactUs() {
    return (
        <div className="hero-banner hero-inner-banner">
            <div className="sideBar">
                <div className="quick-links">
                    <a href="javascript:void(0);">Publication</a>
                    <a href="javascript:void(0);">Events</a>
                </div>
            </div>
            <div className="inner-content">
                <div className="banner contact-banner">
                    <div className="main-hd">
                        <h1>Contact Us</h1>
                    </div>
                </div>
                <div className="main-wrapper">
                    <div className="contact-dtls">
                        <div className="info">
                            <h5 className="clr-accent">Address</h5>
                            <p>Mutual Funds Association of Pakistan,
                                207-209, 2nd Floor, Kassam Court Block 5
                                Block – 5, Clifton.
                                Karachi
                                Pakistans
                            </p>
                            <h5 className="clr-accent">Office</h5>
                            <p className="cell-phone">(92-21) 35293103
                                (92-21) 35293136
                                (92-21) 35293137
                            </p>
                            <h5 className="clr-accent">IT</h5>
                            <p>(92-21) 35293137 EXT 14</p>
                            <h5 className="clr-accent">Fax</h5>
                            <p>(92-21) 35293104</p>
                            <h5 className="clr-accent">Email</h5>
                            <p>info@mufap.com.pk
                            </p>
                        </div>
                        <div className="contact-form">
                            <form action="">
                                <h5 className="clr-accent">Contact</h5>
                                <div className="form-row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="text" name="name" id="name" className="form-control"
                                                   placeholder="Your Name(*)" required/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="email" name="email" id="email" className="form-control"
                                                   placeholder="Your Email(*)" required/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="tel" name="phone" id="phone" className="form-control"
                                                   placeholder="Phone"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <select className="form-control" aria-label="Default select example">
                                                <option>Business Department</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <textarea name="message" id="message" cols="30" rows="8"
                                                      className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-primary btn-submit" type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}