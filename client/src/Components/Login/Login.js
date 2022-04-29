import React, { useState } from "react";

function Login({ setUser }) {
    const [ loginData, setLoginData ] = useState({
        username: "",
        password: ""
    })

    function handleChange(event) {
        setLoginData({
            ...loginData,
            [event.target.name]: event.target.value
        })
    }

    function handleLogin(event) {
        event.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: loginData.username,
                password: loginData.password
            }),
        }).then(resp => {
            if (resp.ok) {
                resp.json().then(user => setUser(user))
            }
        });

        setLoginData({
            username: "",
            password: ""
          })
    }

    return (
        <div>
            <div className="login-form-container">
                <form onSubmit={handleLogin}>
                    <input type="username" name="username" placeholder="username..." required value={loginData.username} onChange={handleChange}/>
                    <input type="password" name="password" placeholder="password..." required value={loginData.password} onChange={handleChange}/>
                    <button>Login</button>
                </form>
                <h3>Don't have an account? <a href="http://localhost:4000/signup">Signup</a> </h3> 
            </div>
        </div>
    )
}

export default Login;