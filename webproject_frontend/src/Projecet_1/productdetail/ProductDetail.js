// src/components/ProductDetail.js

import React, {useState} from 'react';
import Bottom from '../Bottom/Bottom';
import Product from '../Product/Product';
import './ProductDetail.css';
import styled from 'styled-components';
import miniheart from "../image/miniheart.png";
import minieyes from "../image/minieyes.png";
import minitime from "../image/minitime.png";
import redheart from "../image/redheart.svg";
import whiteheart from "../image/whiteheart.svg";
import { useParams } from 'react-router-dom';

const ProductDetail = (props) => {
  
 // const { id, image, productName, description, Price} = props.data;

  return (
    <div style={{width:"1024px", height:"490px", margin:"0 auto"}}>
      <div className='productDetail'>
        <div className='card'>
          <img  className='photoImg' style={{width:"428px", height:"428px"}} src="https://dnvefa72aowie.cloudfront.net/origin/article/202309/4ae232cb1c73dd693de0f3ce823cea48b10aad0012e37fc891bb6c4f35ee6e81.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp" alt="이미지"/>
        </div>
        <div className='detailsContainer'>
          <div className='detailHeader'>
            <h2 className='productName'>가방</h2>
            <h1 className='price'>70,000<span>원</span></h1>
          </div>
          <div className='detailTop'>
            <div className='like'>
              <img className='miniLike' style={{width: "16px", height:"16px", marginRight:"3px"}} src={miniheart} alt="미니하트"/>                <p className='likeNumber'>2</p>   
            </div>
            <div className='click'>
              <img className='miniEyes' style={{width: "21px", height:"13px", marginRight:"3px"}} src={minieyes} alt="미니아이즈"/>
              <p className='clickNumber'>28</p>
            </div>
            <div className='time'>
              <img className='miniTime' style={{width: "16px", height:"16px", marginRight:"3px"}} src={minitime} alt="미니시계"/>
              <p className='timeNumber'>2시간전</p>
            </div>
          </div>
          <div className='detailMiddle'>
            <div style={{display:"flex", marginBottom:"20px"}}>
              <p className='productState' >상품상태</p>
              <p className='used'>중고</p>
            </div>
            <div style={{display:"flex", marginBottom:"20px"}}>
              <p className='excahnge'>교환여부</p>
              <p className='exchangeStatus'>교환가능</p>
            </div>
          </div>
            <div className='detailBottom'>
              <button type='button' className='button1' >
                <img className='maxLike' src={whiteheart} alt="하얀색하트"/>
                <p className='shoppingBasket'>찜</p>
                <p className='shoppingBasketNumber'>2</p>
              </button>
              <button type='button' className='talk'>대림톡</button>
              <button type='button' className='buy'>바로구매</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProductDetail;