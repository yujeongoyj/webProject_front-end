import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../../../Product/Loading';
import './1.css';

const MaleClothing = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const apiUrl = '/product';

    axios.get(apiUrl)
      .then(response => {
        const productsWithImages = response.data
          .filter(productData => productData.products.category === 1) // Filter products with id === 1
          .map(productData => ({
            ...productData,
            image: `data:image/png;base64, ${productData.image}`
          }));
        setProducts(productsWithImages);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (!products || products.length === 0) {
    return <div>No products available.</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="bottom">
      <div className="bottom_title">
      <h1 className="list_title">남자의류 추천제품</h1>
      </div>
      <div className="card_product">
        {products.map(productData => (
          <div className="custom-product-wrapper" key={productData.products.id}>
            <div className="card" key={productData.products.id}>
              <div className="card_photo">
                <img
                  className="card_photoimg"
                  src={productData.image}
                  alt={productData.products.productName}
                />
              </div>
              <div className="card_desc">
                <h2 className="card_title">{productData.products.productName}</h2>
                <p className="card_description">{productData.products.description}</p>
                <div className="card_price">{productData.products.price}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaleClothing;
