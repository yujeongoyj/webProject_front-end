import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // useParams 추가
import axios from 'axios';
import Loading from '../Product/Loading';
import './ProductDetail.css'

const Book = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  
  // useParams를 사용하여 현재 URL에서 id 파라미터를 추출
  const { id } = useParams();

  useEffect(() => {
    const apiUrl = `/product`;

    axios.get(apiUrl)
      .then(response => {
    
        const productsWithImages = response.data
          .filter(productData => productData.products.id === parseInt(id)) 
          .map(productData => ({
            ...productData,
            image: `data:image/png;base64, ${productData.image}`
          }));
        setProducts(productsWithImages);
        setLoading(false);
      })
      .catch(error => {
        console.error('데이터 가져오기 오류: ', error);
        setError(error);
        setLoading(false);
      });
  }, [id]); 

  if (loading) {
    return <Loading />;
  }

  if (!products || products.length === 0) {
    return <div>제품이 없습니다.</div>;
  }

  if (error) {
    return <div>오류: {error.message}</div>;
  }

  return (
    <div className="ProductDetail">
      <div className="Detail">
        {products.map(productData => (
          <div className="custom-product-wrapper" key={productData.products.id}>
            <div className="card" key={productData.products.id}>
              <div className="detail_photo">
                <img
                  className="detail_photoimg"
                  src={productData.image}
                  alt={productData.products.productName}
                />
              </div>
              <div className="detail_desc">
                <h2 className="detail_title">{productData.products.productName}</h2>
                <p className="detail_description">{productData.products.description}</p>
                <div className="detail_price">{productData.products.price}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="button">
        <div className="button1">
          <button>찜</button>
        </div>

        <div className="button2">
          <button>대림톡</button>
        </div>

        <div className="button3">
          <button>바로구매</button>
        </div>
      </div>
    </div>
  );
};

export default Book;
