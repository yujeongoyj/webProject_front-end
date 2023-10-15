import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../Product/Loading';
 // Bottom 컴포넌트에 해당하는 CSS 파일을 불러옵니다.
import Product from '../Product/Product';
import './Product.css'

const Bottom = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const apiUrl = '/product';

    axios.get(apiUrl)
      .then(response => {
        console.log(response.data); // API 응답 데이터 확인
        setProducts(response.data); // API 응답의 products 배열을 상태에 설정
        setLoading(false); // 로딩 상태 업데이트
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        setError(error); // 에러 상태 업데이트
        setLoading(false); // 로딩 상태 업데이트
      });
  }, []); // useEffect를 한 번만 실행하도록 빈 배열을 두 번째 인자로 전달

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
       <h1 className="bottom_list_title">중고거래 매물</h1>
    <div className="card_product">
        {products.map((productData) => (
          <div className="custom-product-wrapper" key={productData.products.id}>
            <Product className="product-item"
              id={productData.products.id}
              image={productData.products.image}
              productName={productData.products.productName} 
              description={productData.products.description}
              price={productData.products.price}
            />
          </div>
        ))}
        </div>
    </div>
  );
};

export default Bottom;
