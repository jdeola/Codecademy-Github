import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './App.css';

import Account from '../routes/Account/Account';
import Cart from '../routes/Cart/Cart';
import Checkout from '../routes/Checkout/Checkout';
import Home from '../routes/Home/Home';
import Login from '../routes/Login/Login';
import Orders from '../routes/Orders/Orders';
import OrderDetails from '../routes/OrderDetails/OrderDetails';
import ProductDetails from '../routes/ProductDetails/ProductDetails';
import Register from '../routes/Register/Register';

import Header from './Header/Header';
import PrivateRoute from './PrivateRoute/PrivateRoute';

import { checkLoginStatus } from '../store/auth/Auth.actions';

function App() {

  const dispatch = useDispatch();

  // Load user cart on entry to app
  useEffect(() => {
    async function isLoggedIn() {
      await dispatch(checkLoginStatus());
    }

    isLoggedIn();
  }, [dispatch]);

  return (
    <div style={{flex: 1}}>
      <Router>
        <Header />
        <Switch>
          {/* Public Routes */}
          <Route exact path='/' component={Home} />
          <Route path="/login" component={Login}/>
          <Route path="/products/:productId" component={ProductDetails}/>
          <Route path="/register" component={Register}/>
          <Route path="/orders" component={Orders}/>

          {/* Private Routes */}
          <PrivateRoute exact path='/account' Component={Account} />
          <PrivateRoute exact path='/cart' Component={Cart} />
          <PrivateRoute exact path='/checkout' Component={Checkout} />
          <PrivateRoute exact path='/orders' Component={Orders} />
          <PrivateRoute exact path='/orders/:orderId' Component={OrderDetails} />

          <Redirect from='*' to='/'/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
