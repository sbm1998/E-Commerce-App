import './App.css';
import ShowProduct from './Components/ShowProduct' ;
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App container ">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ShowProduct} />
        <Route exact path="/product" component={() => <div>Under contruction</div>} />

        {/* <Redirect to="/" /> */}
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
