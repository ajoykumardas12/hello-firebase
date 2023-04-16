import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Dashboard = () =>{
    const [currentUser, setCurrentUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const checkLoginState = onAuthStateChanged(auth, (user) => {
            if(user){
                setCurrentUser(user.email);
            }else{
                setCurrentUser(null);
            }
        });

        return () => {
            checkLoginState();
        };
    }, []);

    const signUserOut = () => {
        signOut(auth)
        .then(() => {
            navigate("/signin")
        })
        .catch((error) => console.log(error));
    };

    return(
        <div className="dashboard">
            <h1>Dashboard</h1>
            <div>Hello World</div>
            <div>
                Welcome {currentUser}
            </div>
            <button onClick={signUserOut}>Sign Out</button>
        </div>
    )
}

export default Dashboard;