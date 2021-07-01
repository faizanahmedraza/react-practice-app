import React from "react";

export default function Apply() {
    return (
        <div className="hero-banner hero-inner-banner">
            <div className="sideBar">
                <div className="quick-links">
                    <a href="javascript:;">Publication</a>
                    <a href="javascript:;">Events</a>
                </div>
            </div>
            <div className="inner-content cstmInnerHeight">
                <div className="banner about-banner">
                    <div className="main-hd">
                        <h1>Apply Now</h1>
                        <div className="cstmTextElipseful">
                            <p>Many desktop publishing packages and web page editors now use Lorem packages and
                                web
                                page editors </p>
                        </div>
                    </div>

                </div>
                <div className="main-wrapper cstm-WrapHeight">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <form>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <label> First Name </label>
                                        <input type="text" className="form-control" name=""/>
                                    </div>

                                    <div className="col-lg-6">
                                        <label> Last Name </label>
                                        <input type="text" className="form-control" name=""/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-6">
                                        <label> Email </label>
                                        <input type="text" className="form-control" name=""/>
                                    </div>

                                    <div className="col-lg-6">
                                        <label> Mobile / landline </label>
                                        <input type="text" className="form-control" name=""/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-6">
                                        <label> Upload Your CV </label>
                                        <input type="file" className="form-control cstmUpload" name=""/>
                                    </div>

                                    <div className="col-lg-6">
                                        <label> Upload Your Cover letter </label>
                                        <input type="file" className="form-control cstmUpload" name=""
                                               placeholder="Cherry River Middle School"/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="">
                                            <button type="submit" className="apply-btn">Apply Now</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}