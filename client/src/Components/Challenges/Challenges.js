import React from "react";
import SubmitPhoto from "../SubmitPhoto"
import "./Challenges.css"

function Challenges() {
    return (
        <div className="challenges-page">
            <h1>Challenge Of The Day</h1>
            <SubmitPhoto />
            <h1>Past Challenges</h1>
        </div>
    )
}

export default Challenges;