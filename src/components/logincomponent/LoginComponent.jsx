import React, { useState } from 'react'
import loginstyles from './Login.module.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginComponent = ({ setToken }) => {

    let [loginData, setLoginData] = useState({
        "email": '',
        "password": ''
    })
    const { email, password } = loginData

    let [passshow, setShow] = useState("show");
    let [passText, setPassText] = useState("password");
    const [err, setErr] = useState(false)

    const handleShow = () => {
        if (passshow === "show") {
            setShow("hide")
            setPassText("text")
        }
        else {
            setShow("show")
            setPassText("password")
        }
    }

    const handleChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: [e.target.value] })
    }
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            email: email.toString(),
            password: password.toString()
        }
        console.log(data)
        axios.post("https://reqres.in/api/login", data).then(r => {
            setToken(r.data.token);
            navigate("/dashboard");
            alert("loggin successful")
        }).catch(e => {
            setErr(true)
        })

    }

    return (
        <div className={loginstyles.formMain}>
            <div className={loginstyles.formContainer}>
                <div className={loginstyles.heading}>
                    <h1>Login</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div><input type="text" placeholder='Enter the Email Id' required name="email" value={loginData.email} onChange={handleChange} /></div>
                    <div className={loginstyles.password}>
                        <input type={passText} name="password" placeholder='Password' required value={loginData.password} onChange={handleChange} />
                        <p className={loginstyles.show} onClick={handleShow}>{passshow}</p>
                    </div>
                    <div className={loginstyles.forgotpassword}>
                        <p><a href="/">Forgot password ?</a></p>
                    </div>
                    {
                        err ?
                            <div className="errormessage">
                                <p style={{ color: "red" }}>Invalid credentials</p>
                            </div> : <></>
                    }
                    <div><button type='submit'>Sign in</button></div>
                </form>
            </div>
        </div>
    )
}

export default LoginComponent