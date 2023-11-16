import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../Product/Loading';
import { useParams } from 'react-router-dom'; // useParams 추가


const ProductDetail = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [productDetail, setProductDetail] = useState(null);

  useEffect(() => {
    const apiUrl = `/product/${id}`;

    axios.get(apiUrl)
      .then(response => {
        const productData = response.data; 
        const productWithImage = {
          ...productData,
          image: `data:image/png;base64, ${productData.image}`
        };
        setProductDetail(productWithImage);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching product data: ', error);
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!productDetail) {
    return <div>No product details available.</div>;
  }

  return (
    <div>
      <h2>{productDetail.products.productName}</h2>
      <img src={productDetail.image} alt={productDetail.products.productName} />
      <p>{productDetail.products.description}</p>
      <div>{productDetail.products.price}</div>
    </div>
  );
};

export default ProductDetail;
