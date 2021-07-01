import React from "react";

export default function AboutUs() {
    return (
        <div className="hero-banner hero-inner-banner">
            <div className="sideBar">
                <div className="quick-links">
                    <a href="javascript:;">Publication</a>
                    <a href="javascript:;">Events</a>
                </div>
            </div>
            <div className="inner-content">
                <div className="banner about-banner">
                    <div className="main-hd">
                        <h1>ABOUT US</h1>
                    </div>
                </div>
                <div className="main-wrapper">
                    <p>Mutual Funds Association of Pakistan (MUFAP) is the trade body for Pakistan's multi
                        billion rupees asset management industry. The money our members manage is in a wide
                        variety of investment vehicles including stocks, bonds, money market instruments,
                        government securities and bank deposits. Our role is to ensure transparency, high
                        ethical conduct and growth of the mutual fund industry.</p>
                    <h4 className="clr-theme">VISION</h4>
                    <p>To have collective investment as the preferred investment solution for investors and
                        financial intermediaries</p>
                    <h4 className="clr-accent">MISSION</h4>
                    <p className="pb-0">The Association is engaged in five core missions: contributing to a
                        strong national economy by encouraging savings and improving the opportunities for
                        achieving personal financial independence; encouraging adherence to high ethical
                        standards by all industry participants; providing services that improve the regulatory
                        framework; advancing the interest of funds and the fund managers; and promoting public
                        understanding of mutual funds and pension funds.</p>
                </div>
            </div>
        </div>
    );
}