import React, { useState } from "react";

function Login() {
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

    function handleLogin() {

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
                <h3>Don't have an account? Signup</h3>
            </div>
        </div>
    )
}

export default Login;