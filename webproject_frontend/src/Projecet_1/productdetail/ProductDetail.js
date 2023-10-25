// src/components/ProductDetail.js

import React from 'react';
import Bottom from '../Bottom/Bottom';
import './ProductDetail.css';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const ProductDetail = (props) => {
  
  //const { product_image, pid, name, price} = props.data;

  return (
    <Card>
      <CardHead>
        <img alt= "예시이미지" src="https://dnvefa72aowie.cloudfront.net/origin/article/202309/4ae232cb1c73dd693de0f3ce823cea48b10aad0012e37fc891bb6c4f35ee6e81.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"/>
      </CardHead>
      <div className='detailcontents'>
        <ItemName>가방</ItemName>
        <Price>70,000원</Price>

        <p>상품상태 중고</p>
        <p>교환여부 교환불가능</p>
        <button>찜</button>
        <button>대림톡</button>
        <button>바로구매</button>
      </div>
    </Card>
  );
};

const Card= styled.div`
  width: 196px;
  margin-right: 11px;
  margin-bottom: 11px;
  &:nth-child(5n) {
    margin-right: 0;
  }
  `;

const CardHead = styled.div`
  position: relative;
  width: 100%;
  height: 194px;
  img {
    vertical-align: bottom;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
  }
`;

const ItemName = styled.div`
  position: relative;
  font-size: 14px;
  padding-bottom: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const ItemContentBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20px;
`;

const Price = styled.div`
  font-size: 16px;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  &::after{
    content: "원";
    font-size: 13px;
    margin-left: 3px;
  }
`;
const Time = styled.div`
  font-size: 12px;
  color: rgb(136, 136, 136);
`;

export default ProductDetail;