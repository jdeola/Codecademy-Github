import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadProducts } from '../../store/products/Products.actions';

import ProductCard from '../../components/ProductCard/ProductCard';

import '../Login/Login';

function Home() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  useEffect(() => {
    async function load() {
      await dispatch(loadProducts());
    }
    load();
  }, [dispatch]);

  return (
    <section className="grid">
      { products && Object.keys(products).length > 0 &&
        Object.keys(products).map((key) => {
          const product = products[key];
          return <ProductCard data={product} key={product.id} />
        })
      }
    </section>
  );
}

export default Home;
