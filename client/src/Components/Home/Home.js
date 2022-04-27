import React from "react";
import './Home.css';
import Navbar from '../Navbar/Navbar';


function Home() {
    return (
        <div>
            <Navbar/>
            <div className="sections-container">
                <div className="home-header">
                    <h1>Welcome to Pic-It-Up <br/> In Queens</h1>
                </div>
                <div id="announcements">
                    <h1>Announcements</h1>
                </div>
                <div id="about-us">
                    <h1>About Us</h1>
                </div>
            </div>
        </div>
    )
}

export default Home;