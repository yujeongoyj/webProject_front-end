import React from "react";
import './Header.css';
import hbg from '../images/hbg.png';
import search from '../images/search.png';
import sell from '../images/sell.png';
import mystore from '../images/mystore.png';
import styled from "styled-components";
import { useState } from 'react'
import { Link } from "react-router-dom";
import Login from '../pages/Login';
import { useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom'; // NavLink import 추가
import './CategoryMenu.css';
import LoginModal from "../components/LoginModal";


function Header() {

  const [modalOpen, setModalOpen] = useState(false);


  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  }

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "unset";
  }


  const navigate = useNavigate();

  // const movingLogin = () => {
  //   navigate("/login");
  // };

  const movingMain = () => {
    navigate("/");
  };
  const AddProduct = () => {
    navigate("/AddProduct");
  };

  const [isCategoryHovered, setCategoryHovered] = useState(false);
  const [isSubMenuVisible, setSubMenuVisible] = useState(false);

  const categories = [
    {
      name: {
        ko: '남자의류',
        en: '1'
      },
      subMenu: [
        {
          ko: '의류',
          en: 'clothing'
        },
        {
          ko: '상의',
          en: 'mantop'
        },
      ]
    },

    {
      name: {
        ko: '여자의류',
        en: '2'
      },
      subMenu: [
        {
          ko: '의류',
          en: 'clothing'
        },
        {
          ko: '상의',
          en: 'womenop'
        },
      ]
    },

    {
      name: {
        ko: '신발',
        en: '3'
      },
      subMenu: [
        {
          ko: '스니커즈',
          en: 'clothing'
        },
        {
          ko: '남성화',
          en: 'manshoes'
        },
        {
          ko: '여성화',
          en: 'womenshoes'
        },
        {
          ko: '스포츠화',
          en: 'sportsshoes'
        },
      ]
    },

    {
      name: {
        ko: '가방/지갑',
        en: '4'
      },
      
      

      
      name: {
        ko: '디지털',
        en: '5'
      },
      subMenu: [
        {
          ko: '휴대폰',
          en: 'womenbag'
        },
        {
          ko: '태블릿',
          en: 'menbag'
        },
        {
          ko: '웨어러블',
          en: 'travelbag'
        },
        {
          ko: '오디오/영상기기',
          en: 'clothing'
        },
        {
          ko: 'pc/노트북',
          en: 'ab'
        },
        {
          ko: '게임/타이틀',
          en: 'ab'
        },
      ]
    },

    {
      name: {
        ko: '생활/주방용품',
        en: '6'
      },
      subMenu: [
        {
          ko: '주방욕품',
          en: 'womenbag'
        },
        {
          ko: '욕실용품',
          en: 'menbag'
        },
        {
          ko: '생활용품',
          en: 'travelbag'
        },
      ]
    },
    {
      name: {
        ko: '도서/티켓/문구',
        en: '7'
      },
      subMenu: [
        {
          ko: '도서',
          en: 'womenbag'
        },
        {
          ko: '문구',
          en: 'menbag'
        },
        {
          ko: '기프티콘/쿠폰',
          en: 'travelbag'
        },
        {
          ko: '상품권',
          en: 'travelbag'
        },
        {
          ko: '티켓',
          en: 'travelbag'
        },
      ]
    },

    {
      name: {
        ko: '시계',
        en: '8'
      },
      subMenu: [
        {
          ko: '남성시계',
          en: 'womenbag'
        },
        {
          ko: '여성시계',
          en: 'menbag'
        },
        {
          ko: '시계용품',
          en: 'travelbag'
        },
      ]
    },

    {
      name: {
        ko: '쥬얼리',
        en: '9'
      },
      subMenu: [
        {
          ko: '귀걸이/피어싱',
          en: 'womenbag'
        },
        {
          ko: '목걸이/펜던트',
          en: 'menbag'
        },
        {
          ko: '팔찌',
          en: 'travelbag'
        },
        {
          ko: '발찌',
          en: 'travelbag'
        },
        {
          ko: '반지',
          en: 'travelbag'
        },
        {
          ko: '쥬얼리세트',
          en: 'travelbag'
        },
      ]
    },
    

  ];


  const handleCategoryMouseEnter = () => {
    setCategoryHovered(true);
    setTimeout(() => {
      setSubMenuVisible(true);
    }, 1000);
  };

  const handleCategoryMouseLeave = () => {
    setCategoryHovered(false);
    setTimeout(() => {
      setSubMenuVisible(false);
    }, 200);
  };

  const handleSubMenuMouseEnter = () => {
    setCategoryHovered(true);
    setSubMenuVisible(true);
  };

  const handleSubMenuMouseLeave = () => {
    // SubMenu를 떠나면 메뉴를 숨깁니다.
    setCategoryHovered(false);
    setSubMenuVisible(false);
  };



  return (
    <MainHeader>
      <MainHeaderContainer>
        <MainHeaderTop>
          <LogoA onClick={movingMain}>
            <img className="header_logo" src="https://www.daelim.ac.kr/type/KOR_A/img/intro/logo.png" />
          </LogoA>
          <MainHeaderMiddle>
            <MainHeaderMiddleContainer>
              <input
                type="text"
                placeholder="물품을 검색해보세요" />
              <SearchA>
                <img src={search} alt="search" />
              </SearchA>
            </MainHeaderMiddleContainer>
          </MainHeaderMiddle>
          <MainHeaderRight>
            <HeaderRightA onClick={openModal}>로그인</HeaderRightA>
            <LoginModal open={modalOpen} close={closeModal} />

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
            <div className="category-menu" onMouseEnter={handleCategoryMouseEnter} onMouseLeave={handleCategoryMouseLeave}>
              <img src={hbg} alt="메뉴" className="category-label" />
              {isCategoryHovered && (
                <ul className="category-list">
                  <li className="category-all">
                    전체메뉴
                  </li>
                  {categories.map((category, index) => (
                    <li key={index}>
                      {category.name && category.name.ko && (
                        <NavLink to={`/${category.name.en.toLowerCase()}`} activeClassName="active_main">
                          {category.name.ko}
                        </NavLink>
                      )}
                      {isSubMenuVisible && category.subMenu && (
                        <div className="hidden-menu">
                          {category.subMenu.map((subMenuItem, subIndex) => (
                            <NavLink
                              key={subIndex}
                              to={`/${subMenuItem.en.toLowerCase()}`} // 서브 메뉴 항목의 영문 이름으로 경로 생성
                              activeClassName="active_sub"
                            >
                              {subMenuItem.ko}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Hambuger>
          <SellerInfoA>
            <b>ReUseIt</b>
            {/* <img  alt="arrowRight"/> */}
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