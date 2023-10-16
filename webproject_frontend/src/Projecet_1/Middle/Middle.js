import React from "react";
import './Middle.css';
import '../components/Button';
import styled from "styled-components";
import AddProduct from '../pages/AddProduct'
import Button from "../components/Button";
import banner1 from "../images/banner1.jpg";
import banner2 from "../images/banner2.jpg";
import banner3 from "../images/banner3.jpg";
import banner4 from "../images/banner4.jpg";
import banner5 from "../images/banner5.jpg";
import prev from "../images/next.png";
import next from "../images/prev.png";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
            onClick={onClick}
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
            onClick={onClick}
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
                <div><Img src={banner1}/></div>
                <div><Img src={banner2}/></div>
                <div><Img src={banner3}/></div>
                <div><Img src={banner4}/></div>
                <div><Img src={banner5}/></div>
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