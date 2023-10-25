// src/components/ProductDetail.js

import React, { useState } from 'react';
import Header from '../Header/Header';
import './ProductDetail.css';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const ProductDetail = (props) => {
  
  let {id} = useParams();

  return (
    <div className="ProductContainer">
      <img alt= "예시이미지" src="https://dnvefa72aowie.cloudfront.net/origin/article/202309/4ae232cb1c73dd693de0f3ce823cea48b10aad0012e37fc891bb6c4f35ee6e81.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"/>
      <h2>가방</h2>
      <h1>70,000원</h1>
      <p>상품상태 중고</p>
      <p>교환여부 교환불가능</p>
      <button>찜</button>
      <button>대림톡</button>
      <button>바로구매</button>
    </div>
  );
};

export default ProductDetail;