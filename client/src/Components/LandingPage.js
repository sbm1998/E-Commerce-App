import React from 'react'
import { useHistory } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'

const Welcome=()=>{
    let history=useHistory();
    const token = useSelector((state)=>state.product.token);
    const dispatch=useDispatch();
    
    const handleLoginLogout = () => {
        if (token) {
            localStorage.removeItem('token');
            dispatch({
                type: "SIGN_OUT"
            });
        } else {
            history.push('/login');
        }
    }
    

    return(
        <div>
            <center>
           <h1><em>Hello Welcome to Shopping Bazaar</em></h1>
           <h1><em>First You can Login and SignUp To Purchase and Home To Explore  </em></h1>
           <button onClick={handleLoginLogout}>{token ? "Logout" : "Login"}</button><br></br><br></br>
           <button onClick={() =>{history.push("/show");}}>HomePage</button><br /><br />
           
           </center>
        </div>
    )
}
export default Welcome;