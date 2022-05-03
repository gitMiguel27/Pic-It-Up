import React from "react";
import ProfileCard from "./ProfileCard";
import "./MyPage.css"

function MyPage({ user }) {

    return (
        <div className="mypage">
            <div>
                {user != null? <ProfileCard user={user} /> : <h3>Please Login To Use This Feature</h3>}
            </div>
        </div>
    )
}

export default MyPage;