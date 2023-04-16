import React, { useState } from "react"
import { auth } from "../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const signUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            navigate("/signin")
        })
        .catch((error) => {
            console.log(error.message);
        });
    };

    return (
        <div>
            <form 
                onSubmit={(e) => {e.preventDefault(); signUp();}} 
                className='form'
            >
                <h1>Create an Account</h1>
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
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <button type="submit">Sign Up</button>
            </form>
            <div>Already have an account? <Link to={"/signin"}>Sign In</Link></div>
        </div>
    )
}

export default SignUp;