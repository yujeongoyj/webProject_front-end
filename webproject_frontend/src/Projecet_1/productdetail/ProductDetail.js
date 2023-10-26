// src/components/ProductDetail.js

import React, {useState} from 'react';
import Header from '../Header/Header';
import Product from '../Product/Product';
import './ProductDetail.css';
import styled from 'styled-components';
import miniheart from "../image/miniheart.png";
import minieyes from "../image/minieyes.png";
import minitime from "../image/minitime.png";
import redheart from "../image/redheart.svg";
import whiteheart from "../image/whiteheart.svg";
import { useParams } from 'react-router-dom';
import Footer from '../Foofer/Footer';

const ProductDetail = (props) => {
  
 // const { id, image, productName, description, Price} = props.data;

  return (
    <div>
    <Header />
    <div style={{width:"1024px", height:"490px", margin:"0 auto"}}>
      <div className='productDetail'>
        <div className='card'>
          <img  className='photoImg' style={{width:"428px", height:"428px"}} src="https://dnvefa72aowie.cloudfront.net/origin/article/202309/4ae232cb1c73dd693de0f3ce823cea48b10aad0012e37fc891bb6c4f35ee6e81.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp" alt="이미지"/>
        </div>
        <div className='detailContainer'>
          <div className='detailHeader'>
            <div className='productName'>가방</div>
            <h1 className='price'>70,000<span>원</span></h1>
          </div>
          <div className='detailTop'>
            <div className='detailLeft'>
            <div className='box1'>
              <img className='miniLike' style={{width: "16px", height:"16px", marginRight:"3px"}} src={miniheart} alt="미니하트"/>                
              <div className='number1'>2</div>   
            </div>
            <div className='box1'>
              <img className='miniEyes' style={{width: "21px", height:"13px", marginRight:"3px"}} src={minieyes} alt="미니아이즈"/>
              <div className='number1'>28</div>
            </div>
            <div className='box1'>
              <img className='miniTime' style={{width: "16px", height:"16px", marginRight:"3px"}} src={minitime} alt="미니시계"/>
              <div className='number1'>2시간전</div>
            </div>
            </div>
          </div>
          <div className='detailMiddle'>
            <div style={{display:"flex", marginBottom:"20px"}}>
              <div className='listName' >상품상태</div>
              <div className='listValue'>중고</div>
            </div>
            <div style={{display:"flex", marginBottom:"20px"}}>
              <div className='listName'>교환여부</div>
              <div className='listValue'>교환가능</div>
            </div>
          </div>
            <div className='detailBottom'>
              <button type='button' className='button0' >
                <img className='maxLike' src={whiteheart} alt="하얀색하트"/>
                <span className='shoppingBasket'>찜</span>
                <span className='shoppingBasket'>2</span>
              </button>
              <button type='button' className='button1'>대림톡</button>
              <button type='button' className='button2'>바로구매</button>
            </div>
          </div>
        </div>
    </div>
    <div>
      <Footer/>
    </div>
    </div>
  )
}

export default ProductDetail;