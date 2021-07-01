import React from "react";

export default function ContactUs() {
    return (
        <div class="hero-banner hero-inner-banner">
            <div class="sideBar">
                <div class="quick-links">
                    <a href="javascript:;">Publication</a>
                    <a href="javascript:;">Events</a>
                </div>
            </div>
            <div class="inner-content">
                <div class="banner contact-banner">
                    <div class="main-hd">
                        <h1>Contact Us</h1>
                    </div>
                </div>
                <div class="main-wrapper">
                    <div class="contact-dtls">
                        <div class="info">
                            <h5 class="clr-accent">Address</h5>
                            <p>Mutual Funds Association of Pakistan,
                                207-209, 2nd Floor, Kassam Court Block 5
                                Block – 5, Clifton.
                                Karachi
                                Pakistans
                            </p>
                            <h5 class="clr-accent">Office</h5>
                            <p class="cell-phone">(92-21) 35293103
                                (92-21) 35293136
                                (92-21) 35293137
                            </p>
                            <h5 class="clr-accent">IT</h5>
                            <p>(92-21) 35293137 EXT 14</p>
                            <h5 class="clr-accent">Fax</h5>
                            <p>(92-21) 35293104</p>
                            <h5 class="clr-accent">Email</h5>
                            <p>info@mufap.com.pk
                            </p>
                        </div>
                        <div class="contact-form">
                            <form action="">
                                <h5 class="clr-accent">Contact</h5>
                                <div class="form-row">
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <input type="text" name="name" id="name" class="form-control"
                                                   placeholder="Your Name(*)" required/>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <input type="email" name="email" id="email" class="form-control"
                                                   placeholder="Your Email(*)" required/>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <input type="tel" name="phone" id="phone" class="form-control"
                                                   placeholder="Phone"/>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <select class="form-control" aria-label="Default select example">
                                                <option selected>Business Department</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <textarea name="message" id="message" cols="30" rows="8"
                                                      class="form-control"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <button class="btn btn-primary btn-submit" type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}