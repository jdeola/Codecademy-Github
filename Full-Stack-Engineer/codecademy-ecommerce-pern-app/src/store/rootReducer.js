import { combineReducers } from 'redux';
import authReducer from './auth/Auth.reducers';
import cartReducer from './cart/Cart.reducers';
import orderReducer from './orders/Orders.reducers';
import productReducer from './products/Products.reducers';
import userReducer from './user/User.reducers';

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  products: productReducer,
  cart: cartReducer,
  order: orderReducer
});