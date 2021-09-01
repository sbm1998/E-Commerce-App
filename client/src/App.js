import './App.css';
import ShowProduct from './Components/ShowProduct' ;
import ProductDetails from './Components/ProductDetails';
import LoginUsers from './Components/LoginUsers';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddCart from './Components/AddCart';


function App() {
  return (
    <div className="App container ">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ShowProduct} />
        <Route exact path="/product/:productId" component={ProductDetails} />
        <Route exact path="/login" component={LoginUsers} />
        <Route exact path="/AddCart" component={AddCart}/>
        {/* <Redirect to="/" /> */}
      </Switch>
      </BrowserRouter>
    </div>
  );  
}

export default App;
