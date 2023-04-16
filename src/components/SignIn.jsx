import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, redirect, useNavigate } from "react-router-dom";

const SignIn = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const signIn = (() => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            navigate("/dashboard");
        })
        .catch((error) => {
            if(error.code === "auth/user-not-found"){
                setErrorMessage("User not found!")
            }else if(error.code === "auth/wrong-password"){
                setErrorMessage("Wrong password")
            }
        });
    })

    return (
        <div>
            <form 
                onSubmit={(e) => {e.preventDefault(); signIn();}} 
                className='form'
            >
                <h1>Sign In</h1>
                <input 
                    type="email" 
                    placeholder='Enter your email' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <input 
                    type="password" 
                    name="" id="" 
                    placeholder='Enter your password' 
                    value={password} onChange={(e) => setPassword(e.target.value)} 
                />
                {errorMessage && <p className="error">{errorMessage}</p>}
                <button type="submit" >Sign In</button>
            </form>
            <div>Don't have an account yet? <Link to={"/"}>Sign Up</Link></div>
        </div>
    )
}

export default SignIn;