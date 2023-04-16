import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, redirect, useNavigate } from "react-router-dom";

const SignIn = () =>{
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (() => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // console.log(userCredential);
            navigate("/dashboard");
        })
        .catch((error) => {
            console.log(error);
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
                <button type="submit" >Sign In</button>
            </form>
            <div>Don't have an account yet? <Link to={"/"}>Sign Up</Link></div>
        </div>
    )
}

export default SignIn;