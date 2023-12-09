import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loading from '../Product/Loading';
import './Product.css';

const Bottom = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const apiUrl = '/product';

    axios.get(apiUrl)
      .then(response => {
        const productsWithImages = response.data.map(productData => ({
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
      <h1 className="bottom_list_title">오늘의 상품 추천</h1>
      <div className="card_product">
        {products.map(productData => (
          <div className="custom-product-wrapper" key={productData.products.id}>
            <Link to={`/product/detail/${productData.products.id}`}>
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
                  <div className="card_price">{productData.products.price}원</div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>  
    </div>
  );
};

export default Bottom;
