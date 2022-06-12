import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import './ProductCard.css';

function ProductCard(props) {

  const { data } = props;

  return (
    <div className="grid-item">
      <img className="product-card-img" src="https://elcopcbonline.com/photos/product/4/176/4.jpg" alt="" />
      <div className="product-card-info-container">
        <div className="product-card-info">
          <p>{data.name}</p>
          <p>{data.price / 100}</p>
        </div>
        <Button
          variant="outlined"
          color="primary"
          component={Link}
          to={`/products/${data.id}`}
        >View</Button>
      </div>
    </div>
  );
}

export default ProductCard;