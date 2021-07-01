import React from "react";

export default function Footer() {
    return (
        <footer>
            <div className="ftr-hd">
                <h1>Lodge Complaint</h1>
            </div>
            <div className="ftr-nav">
                <a href={"javascript:;"} className="btn-learn-more">Learn More</a>
                <div className="navsBar">
                    <a href={"javascript:;"}>
                            <span className="svg-icon">
                                <img src={"assets/frontend/svg/plant.svg"} alt=""/>
                            </span>
                        <span className="title">Mutual Funds</span>
                    </a>
                    <a href={"javascript:;"}>
                            <span className="svg-icon">
                                <img src={"assets/frontend/svg/funds.svg"} alt=""/>
                            </span>
                        <span className="title">Voluntary Pension Scheme</span>
                    </a>
                    <a href={"javascript:;"}>
                            <span className="svg-icon">
                                <img src={"assets/frontend/svg/file.svg"} alt=""/>
                            </span>
                        <span className="title">Exchange Trade Fund</span>
                    </a>
                    <a href={"javascript:;"} className="ml-auto">
                            <span className="svg-icon">
                                <img src={"assets/frontend/svg/file.svg"} alt=""/>
                            </span>
                        <span className="title">NAVs</span>
                    </a>
                    <a href={"javascript:;"}>
                            <span className="svg-icon">
                                <img src={"assets/frontend/svg/shipping.svg"} alt=""/>
                            </span>
                        <span className="title">RETURNS</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}