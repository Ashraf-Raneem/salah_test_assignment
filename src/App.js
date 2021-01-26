import logo from './logo.svg';
import './App.css';

import {Switch, Route} from "react-router-dom";
import Index from './pages/index-page/index-page';
import CartPage from './pages/cart-page/cart-page';
import PrimaryNavbar from './components/navbar/navbar.component';
import Footer from './components/footer/footer.component';


function App() {
  return (
    <div className='App'>
      <PrimaryNavbar/>
      <Switch>
        <Route path='/cart' component={CartPage}></Route>
        <Route path="/" component={Index} ></Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
