import React from "react";
import './Middle.css';
import '../components/Button';
import styled from "styled-components";
import AddProduct from '../pages/AddProduct'
import Button from "../components/Button";
import prev from "../images/next.png";
import next from "../images/prev.png";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductDetail from "../productdetail/ProductDetail";
import { useNavigate } from "react-router-dom";


function Middle() {
    // return(
    //     <div className="middle">
    //         <div className="middlebox">
    //                 <h1 className="cover_title">
    //                     믿을만한
    //                     <br/>
    //                     이웃 간 중고거래
    //                 </h1>
    //                 <span className="cover_description">
    //                     동네 주민들과 가깝고 따뜻한 거래를 
    //                     <br/>
    //                     지금 경험해보세요.
    //                 </span>
    //                 <Button></Button>
    //             </div>
                
    //     </div>
    // );


    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block"}}
            onClick={onclick}
          >
          <ArrowLeft><img style={{width:"15px", height:"30px"}} src={next} alt="arrowLeft"/></ArrowLeft>
          </div>
        );
      }
      
      function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block"}}
            onClick={onclick}
          >
          <ArrowRight><img style={{width:"15px", height:"30px"}} src={prev} alt="arrowRight"/></ArrowRight>
          </div>
        );
      }

      

      const settings = {
        dots: false,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToshow: 4,
        slidesToScroll: 1,
    };


      
    return (
        <BannerBox>
            <Slick {...settings}>
                <div><Img src="https://media.bunjang.co.kr/images/nocrop/1053030467_w1197.jpg"/></div>
                <div><Img src="https://media.bunjang.co.kr/images/nocrop/1050965086_w1197.jpg"/></div>
                <div><Img src="https://media.bunjang.co.kr/images/nocrop/1051919701_w1197.jpg"/></div>
                <div><Img src="https://media.bunjang.co.kr/images/nocrop/1050941351_w1197.jpg"/></div>
                <div><Img src="https://media.bunjang.co.kr/images/nocrop/1051702102_w1197.jpg"/></div>
            </Slick>
        </BannerBox>
    );
}

const ArrowLeft = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 950px;
`;

const ArrowRight = styled.div`
  position: absolute;
  left: 5px;
  right: 1000px;
  top: 10px;
  z-index: 2;
`;

const BannerBox = styled.div`
    width: 1030px;
    height: 300px;
    margin: 0px auto 30px;
`;
const Img = styled.img`
    position: relative;
    width: 1030px;
    height: 300px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    // z-index:1;
`;


export default Middle;