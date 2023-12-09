import React, { useState } from "react";

const Signup = () => {
 const [name,setName] = useState("");
 const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
  return (
    <div>
      <h1>Register</h1>
      <input className="inputBox" type="text" placeholder="Enter Name" 
      value={name} onChange={(e)=>setName(e.target.value)}></input>
      <input
        className="inputBox"
        type="email"
        placeholder="Enter Email"
        value={email} onChange={(e)=>setEmail(e.target.value)}
      ></input>
      <input
        className="inputBox"
        type="password"
        placeholder="Enter Password"
        value={password} onChange={(e)=>setPassword(e.target.value)}
      ></input>

        <button type="button">Sign Up</button>
    </div>
  );
};

export default Signup;
