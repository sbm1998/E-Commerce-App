import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { requestUserSignIn } from '../userThunk';



const LoginUsers=()=>{
    const [loginData,setLoginData]=useState({
        username:"",
        password:"",
    })
    const [error,setError]=useState(" ")
    let dispatch=useDispatch();
    let history=useHistory();

    console.log(loginData);
    const {username,password}=loginData;

    
    const handleLoginData=(e)=>{
        let {name,value}=e.target;
        setLoginData({...loginData,[name]:value})
    }
    const handleSubmit= (e)=>{
        e.preventDefault();
        if(!username || !password){
            setError("Fill All the Value First");
        }
        else{
            dispatch(requestUserSignIn(loginData));
            history.push("/");
            setError("");
    }
}
    return(
        <div>
            <center>
            <h2><em>Login Form</em></h2>
            {error && <h3>{error}</h3>}
            <form onSubmit={handleSubmit}>
            <label for="username">UserName:</label><br />
            <input type="username" id="username" name="username" value={username} autoComplete="off" onChange={handleLoginData}/><br />
            <label for="password">Password:</label><br />
            <input type="password" id="password" name="password" value={password} onChange={handleLoginData}/><br />
            <input type="submit" value="Submit"/>
            </form>
            </center>
            </div>

    )
}
export default LoginUsers;
