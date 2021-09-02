import {Route,Redirect } from 'react-router-dom';
import {useSelector} from 'react-redux';

const PrivateRoute=(props)=>{
    const token =useSelector((state)=>state.product.token)
    console.log('login',token)

    return token ?(
        <Route {...props} />
    ):(
        <Redirect to={{pathname:"/login"}}/>
    )
}

export default PrivateRoute;