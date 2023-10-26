import React from "react";
import './Header.css';
import hbg from '../images/hbg.png';
import search from '../images/search.png';
import sell from '../images/sell.png';
import mystore from '../images/mystore.png';
import styled from "styled-components";
import  {useState} from 'react'
import { Link } from "react-router-dom";
import Login from '../pages/Login';
import { useNavigate } from "react-router-dom";



function Header() {
  const navigate = useNavigate();

  const movingLogin = () => {
    navigate("/login");
  };

  const AddProduct = () => {
    navigate("/AddProduct");
  };


  return (
    <MainHeader>
      <MainHeaderContainer>
        <MainHeaderTop>
          <LogoA>
            <img className="header_logo" src="https://www.daelim.ac.kr/type/KOR_A/img/intro/logo.png"/>
          </LogoA>
          <MainHeaderMiddle>
            <MainHeaderMiddleContainer>
              <input type="text" placeholder="물품을 검색해보세요" />
              <SearchA>
                <img src={search} alt="search" />
              </SearchA>
            </MainHeaderMiddleContainer>
          </MainHeaderMiddle>
          <MainHeaderRight>
            <HeaderRightA onClick={movingLogin}> {/* 로그인 페이지로 이동 */}
              로그인
             
            </HeaderRightA>
            <HeaderRightA>
              <img src={mystore} alt="mystore" />
              내상점
            </HeaderRightA>
            <HeaderRightA onClick={AddProduct}>
              <img src={sell} alt="mystore" />
              판매하기
            </HeaderRightA>
          </MainHeaderRight>
        </MainHeaderTop>
        <MainHeaderBottom>
          <Hambuger>
            <img src={hbg} alt="menu" />
          </Hambuger>
          <SellerInfoA>
            <b>ReUseIt</b>
          </SellerInfoA>
        </MainHeaderBottom>
      </MainHeaderContainer>
    </MainHeader>
  );
};

const MainHeader = styled.div`
  position: sticky;
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 35px;
  background: rgb(255, 255, 255);
  z-index: 10;
  border-bottom: 1px solid rgb(238, 238, 238);
  top: 0;
  left: 0;
`;
const MainHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1024px;
`;
const MainHeaderTop = styled.div`
  display: flex;
  align-items: center;
  width: 1024px;
  height: 40px;
`;
const LogoA = styled.a`
  margin-right: 100px;
  width: 136px;
  display: flex;
  align-items: center;
  img {
    vertical-align: bottom;
  }
`;
const MainHeaderMiddle = styled.div`
  border: 2px solid rgb(153,204,255);
  width: 460px;
  height: 40px;
  box-sizing: border-box;
  position: relative;
`;
const MainHeaderMiddleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0px 15px;
  box-sizing: border-box;
  input {
    color: rgb(102, 102, 102);
    flex-grow: 1;
    appearance: none;
    border: none;
    &:hover,
    :focus {
      outline: none;
    }
  }
`;
const SearchA = styled.a`
  color: rgb(33, 33, 33);
  text-decoration: none;
  cursor: pointer;
  img {
    vertical-align: bottom;
    width: 16px;
    height: 16px;
  }
`;
const MainHeaderRight = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  flex-grow: 1;
`;
const TalkButton = styled.button`
  margin-left: 30px;
  display: flex;
  align-items: center;
  position: relative;
  border: none;
  background: #fff;
  &:hover,
  :focus {
    outline: none;
  }
  img {
    margin-right: 5px;
    vertical-align: bottom;
    width: 23px;
    height: 24px;
    background-color: transparent;
  }
`;
const HeaderRightA = styled.a`
  margin-left: 30px;
  display: flex;
  align-items: center;
  position: relative;
  font-size: medium;
  img {
    width: 23px;
    height: 24px;
    margin-right: 5px;
  }
    &::after{
    content: "";
    width: 1px;
    height: 10px;
    border-right: 1px solid rgb(204, 204, 204);
    position: absolute;
    top: 8px;
    right: -15px;
  }
  

`;
const MainHeaderBottom = styled.div`
    display: flex;
    align-items: center;
    height: 70px;
`
const Hambuger = styled.div`
margin-right: 20px;
    position: relative;
    img{
        width: 20px;
        height: 16px;
    }
`
const SellerInfoA = styled.a`
    display: flex;
    align-items: baseline;
    margin: 10px;
    line-height: 1.5;
    height: 21px;
    box-sizing: border-box;
    border-bottom: 1px solid transparent;
    font-size: medium;
    
    img{
        width: 6px;
        height: 9px;
        margin-left: 5px;
    }
`

export default Header;