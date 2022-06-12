import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import OrderCard from '../../components/OrderCard/OrderCard';

import { loadOrders } from '../../store/orders/Orders.actions';

import './Orders.css';

function Orders() {

  const dispatch = useDispatch();
  const orders = useSelector(state => state.order);

  useEffect(() => {
    async function load() {
      await dispatch(loadOrders());
    }
    load();
  }, [dispatch]);

  return (
    <div className="orders-page">
      <div className="orders-content-container">
        <Typography variant="h4">Your Orders</Typography>
        <Divider/>
        <Typography variant="h6">{Object.keys(orders).length || 0} orders</Typography>
        { orders && Object.keys(orders).length > 0 &&
          Object.keys(orders).map((key) => {
            const order = orders[key];
            return <OrderCard {...order} key={order.id} />
          })
        }
      </div>
    </div>
  );
}

export default Orders;
