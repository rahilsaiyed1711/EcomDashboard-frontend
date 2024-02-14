import React ,{useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Login =()=>{
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem("user");
        if (auth) {
            navigate("/")
        }
    },[])
    

    const handleLogin=async ()=>{
        let result = await fetch("http://localhost:5000/login",{
            method:"post",
            body:JSON.stringify({email, password}),
            headers:{
                "Content-Type":"application/json"
            }
        });
        result=await result.json()
        console.log(result);
        if (result.auth) {
            localStorage.setItem("user",JSON.stringify(result.user));
            localStorage.setItem("token",JSON.stringify(result.auth));

            navigate("/")
        } else {
            alert("please enter correct details");
        }
    }
    return(
        <div className='login'> 
           <input className="inputBox" onChange={(event)=>{setEmail(event.target.value)}} value={email}
           type="text" placeholder="enter email" required />
           
            <input className="inputBox" onChange={(event)=>{setPassword(event.target.value)}} value={password}
             type="password" placeholder="enter password" required />

            <button onClick={handleLogin} className="signbtn">LOGIN</button>


        </div>
        
        )
}
export default Login;