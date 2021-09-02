import './App.css';
import ShowProduct from './Components/ShowProduct' ;
import ProductDetails from './Components/ProductDetails';
import LoginUsers from './Components/LoginUsers';
import LandingPage from './Components/LandingPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddCart from './Components/AddCart';
import PrivateRoute from './Components/Routes';
import BuyNow from './Components/BuyNow';


function App() {
  return (
    <div className="App container ">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/show" component={ShowProduct} />
        <Route exact path="/product/:productId" component={ProductDetails} />
       
  
        <Route exact path="/login" component={LoginUsers} />
        <PrivateRoute exact path="/buy" component={BuyNow} />
        <PrivateRoute exact path="/AddCart" component={AddCart}/>
      </Switch>
      </BrowserRouter>
    </div>
  );  
}

export default App;
