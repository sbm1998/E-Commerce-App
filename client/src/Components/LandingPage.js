import React from 'react'
import { useHistory } from "react-router-dom";
const Welcome=()=>{
    let history=useHistory();
    return(
        <div>
            <center>
           <h1><em>Hello Welcome to Shopping Bazaar</em></h1>
           <h1><em>First You can Login and SignUp To Purchase and Home To Explore  </em></h1>
           <button onClick={() =>{history.push("/login");}}>Login</button><br /><br />
           <button onClick={() =>{history.push("/show");}}>HomePage</button><br /><br />
           </center>
        </div>
    )
}
export default Welcome;