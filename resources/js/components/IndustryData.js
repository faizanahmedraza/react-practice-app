import React, {useState,useEffect} from "react";

export default function IndustryData() {

    useEffect(() => {
        fetchItems();
    },[]);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://api.thecatapi.com/v1/favourites');

        const items = await data.json();
        console.log(items);
        setItems(items);
    }

    return (
        <div className="hero-banner hero-inner-banner">
            <div className="sideBar">
                <div className="quick-links">
                    <a href="javascript:;">Publication</a>
                    <a href="javascript:;">Events</a>
                </div>
            </div>
            <div className="inner-content">
                <div className="banner industry-banner">
                    <div className="main-hd">
                        <h1>Industry</h1>
                    </div>
                </div>
                <div className="main-wrapper">

                </div>
            </div>
        </div>
    );
}