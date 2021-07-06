import './App.css';
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
function App() {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [mobile,setMobile]=useState("");
    const [id,setId]=useState("");

    function submit()
    {
        let data={name,email,mobile,id}
// console.warn(data);
        fetch("https://reqres.in/api/users", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(data)
        }).then((resp)=>{
            // console.warn("resp",resp);;
            resp.json().then((result)=>{
                console.warn("result",result)
            })
        })
    }
    return (
        <div className="App">
            <h1>Post method form </h1>
            <h6>Enter the name</h6>
            <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}  />
            <h6>Enter the email</h6>
            <input type="text" name="email"  value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            <h6>Enter the mobile</h6>
            <input type="text" name="mobile"  value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/>
            <h6>Enter the id</h6>
            <input type="number" name="id"  value={id} onChange={(e)=>{setId(e.target.value)}}/><br />

            <button type="button" onClick={submit} >Submit</button>
        </div>
    );
}
export default App;
