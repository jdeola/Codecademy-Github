import React from 'react';
import Button from '@material-ui/core/Button';
import Moment from 'react-moment';
import Divider from '@material-ui/core/Divider';

import './OrderCard.css';

const OrderCard = (props) => {

  const { created, id, total } = props;

  return (
    <div className="order-card-container">
      <div className="order-card-header">
        <div className="order-card-header-row">
          <p className="order-card-header-title top">Order Placed</p>
          <p className="order-card-header-title top">Total</p>
          <p className="order-card-header-title top">Policy Sent To</p>
          <p className="order-card-header-title top">{`Order # ${id}`}</p>
        </div>
        <div className="order-card-header-row">
          <p className="order-card-header-title bottom">
            <Moment format="LL">{created}</Moment>
          </p>
          <p className="order-card-header-title bottom">{`$${total/100}`}</p>
          <p className="order-card-header-title bottom">thomasbergen15@gmail.com</p>
          <div className="order-card-action-container">
            <p className="order-card-header-title bottom">Order Details</p>
            <Divider orientation="vertical" variant="middle"/>
            <p className="order-card-header-title bottom">Invoice</p>
          </div>
        </div>
      </div>
      <Divider/>
      <div className="order-card-content">
        <img src="https://m.media-amazon.com/images/I/61fTX5TjAEL._UL1001_.jpg" alt="" className="order-card-content-img"/>
        <div className="order-card-content-info">
          <p>Product 1</p>
          <p>{`$${total/100}`}</p>
        </div>
        <div className="order-card-content-action-container">
          <Button variant="contained" color="primary">Buy Again</Button>
        </div>
      </div>
      <Divider/>
      <div className="order-card-footer"></div>
    </div>
  )
}

export default OrderCard;