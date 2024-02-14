import React , {useState , useEffect}from "react";
import { useNavigate } from "react-router-dom";
const Signup=()=>{
    const [name , setName]=useState("");
    const [password , setPassword]=useState("");
    const [email , setmail]=useState("");
    const navigate = useNavigate();

useEffect(()=>{
const auth = localStorage.getItem('user');
if(auth){
    navigate('/');
}
})


const collectData= async ()=>{    
    console.log(name , password, email);
    let result = await fetch("http://127.0.0.1:5000/register", {
        method:'post',
        body: JSON.stringify({name, email, password}),
        headers:{
            'Content-Type': "application/json"
        },
    });
    result= await result.json();
    console.log(result);
    localStorage.setItem("user", JSON.stringify(result.result)); 
    localStorage.setItem("token", JSON.stringify(result.auth)); 

    navigate('/');
}



    return(
        <div className="register">
        <h1 className="heading">REGISTER</h1>
            <input className="inputBox" value={name} onChange={(event)=>setName(event.target.value)}
             type="text" placeholder="enter Name" required/>
            
            <input className="inputBox" value={email} onChange={(event)=>setmail(event.target.value)} 
            type="text" placeholder="enter email" required />
           
            <input className="inputBox" value={password} onChange={(event)=>setPassword(event.target.value)} 
            type="password" placeholder="enter password" required />
            
            <button onClick={collectData} className="signbtn">SIGN-UP</button>
        </div>
    );
}
export default Signup;