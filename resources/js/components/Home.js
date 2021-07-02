import React from "react";

export default function Home() {
    return (
        <div className="hero-banner">
            <div>
                <div className="hero-slider">
                    <div className="banner">
                        <div className="main-hd">
                            <h3>Welcome to</h3>
                            <h1>Mufap</h1>
                            <p>Mutual Funds Association of Pakistan (MUFAP) is the trade body for Pakistan's
                                multi billion rupees asset management industry.</p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                    <div className="banner">
                        <div className="main-hd">
                            <h3>Welcome to</h3>
                            <h1>Mufap</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia iure dolore
                                unde eaque laboriosam laudantium perspiciatis</p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                    <div className="banner">
                        <div className="main-hd">
                            <h3>Welcome to</h3>
                            <h1>Mufap</h1>
                            <p> Mollitia iure dolore unde eaque Aut, ratione ea enim delectus tempore minima
                                vero, quos magni cum! Minima, accusamus harum.</p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="quick-links">
                <a href="javascript:void(0);">Publication</a>
                <a href="javascript:void(0);">Events</a>
            </div>
            <div className="search-field">
                <form action="">
                    <input type="text" name="search" id="search" placeholder="How we can help you?"
                           className="form-control" required/>
                    <button className="btn-search" type="submit">Search</button>
                </form>
            </div>
        </div>
    );
}