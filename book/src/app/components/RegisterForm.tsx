"use client";

import { useState } from "react";


const RegisterForm = () => {

    const [nameData, setNameData] = useState("")
    const [emailData, setEmailData] = useState("")
    const [passwordData, setPasswordData] = useState("")
    const [roleData, setRoleData] = useState("user")
    const handleClickaddData = async () => {
        const res = await fetch("/api/register", {
            method: "POST",
            body: JSON.stringify({
                email: emailData,
                name: nameData,
                password: passwordData,
                role: roleData
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (res.status === 500) {
            console.log(res.statusText);
        }
        if (res.status === 200) {
            console.log("Registering succesfully login with your credentianls");
        }
    }

    return (
        <>
            <input type="text" placeholder="name" value={nameData} onChange={(e) => setNameData(e.target.value)} />
            <input type="email" placeholder="email" value={emailData} onChange={(e) => setEmailData(e.target.value)} />
            <input type="password" placeholder="password" value={passwordData} onChange={(e) => setPasswordData(e.target.value)} />
            <button onClick={handleClickaddData}>click to add data</button>
        </>
    );
};

export default RegisterForm;