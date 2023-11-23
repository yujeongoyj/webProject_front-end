import React from 'react';
import styled from "styled-components";
import xbutton from "../image/xbutton.png";
import facebookColor from "../image/facebookColor.png";
import navergreen from "../image/navergreen.png";
import phone from "../image/phone.svg";
import { useNavigate } from "react-router-dom";


const LoginModal = (props) => {

    const {open, close} = props;

    const navigate = useNavigate();
    const MovingLogin = () => {
        navigate("/login");
      };
  

    return (
        <div>
            { open? (
                <Background>
                    <ModalContainer>
                        <div style = {{paddingTop:"40px"}}>
                        <CloseBtn><img onClick={close} style = {{width:"24px", height:"24px"}} src={xbutton} alt="닫기버튼"/></CloseBtn>
                        </div>
                        <div>
                            
                            <MainText>ReUseIt으로 거래 시작하기</MainText>
                            <SubText>간편하게 가입하고 상품을 확인하세요</SubText>
                        </div>
                        <Btngroup>
                            <SnsBtn onClick={()=>{window.alert("앗! 아직 준비중이에요!")}}><Img><img style={{width:"24px", height:"24px"}} src="chrome://new-tab-page/icons/google_logo.svg" alt="구글"/></Img>구글로 이동하기</SnsBtn>
                            <SnsBtn onClick={()=>{window.alert("앗! 아직 준비중이에요!")}}><Img><img style={{width:"24px", height:"24px"}} src={facebookColor} alt="페이스북"/></Img>페이스북으로 이용하기</SnsBtn>
                            <SnsBtn onClick={()=>{window.alert("앗! 아직 준비중이에요!")}}><Img><img style={{width:"24px", height:"24px"}} src={navergreen} alt="네이버"/></Img>네이버로 이용하기</SnsBtn>
                            <LoginBtn onClick={MovingLogin}>
                                <Img><img style={{width:"17px", height:"17px"}} src={phone} alt="본인인증"/></Img>로그인하기</LoginBtn>
                        </Btngroup>
                        <ModalFooter>
                            <FooterText>
                                도움이 필요하면 <a href="help@bunjang.co.kr" style={{textDecoration:"underline", color:"rgb(153, 153, 153)"}}>이메일</a> 또는 고객센터<span style={{fontWeight:"600"}}>1670-2910</span>로 문의 부탁드립니다.<br/>
                                고객센터 운영시간: 09~18시 (점심시간 12~13시, 주말/공휴일 제외)
                            </FooterText>
                        </ModalFooter>
                    </ModalContainer>
                </Background>
            ) : null }
        </div>
    )
};

const Background = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1000;
    align-items: center;
    justify-content: center;
    display: flex;  
`;


const ModalContainer = styled.div`
    background: rgb(247, 247, 247);
    width: 420px;
    height: 506px;
    position: absolute;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 10%) 0px 6px 50px 0px;
    top: 15%;
    left: 40%;
    z-index:3500;
`;

const CloseBtn = styled.button`
    position:absolute;
    top:20px;
    right: 20px;
    border: none;
`;

const Btngroup = styled.div`
    padding: 0px 70px;
    display: block;
`;

const Img = styled.div`
    width: 24px;
    height: 24px;
    position: absolute;
    left: 35px;
    top: calc(50%, -12px);
`;

const SnsBtn = styled.button`
    width: 100%;
    height: 38px;
    box-shadow: rgb(0 0 0 / 5%) 0px 1px 7px 0px;
    background: rgb(255, 255, 255);
    text-align: center;
    border-radius: 4px;
    margin-bottom: 12px;
    position: relative;
    border: none;
`;

const LoginBtn = styled(SnsBtn)`
    :hover{
        background: gray;
        color: white;
        font-weight: bold;
    }
`;

const MainText = styled.div`
    font-size: 20px;
    line-height: 1.5;
    margin-bottom: 15px;
    text-align: center;
    font-weight: bold;
`;

const SubText = styled.div`
    line-height: 1.5;
    margin-bottom: 35px;
    text-align: center;
`;

const ModalFooter = styled.div`
    padding: 2.2rem 2rem 2rem;
    font-size: 12px;
    line-height: 1.5;
    color: rgb(153, 153, 153);
`;

const FooterText = styled.p`
    width: 100%;
    border-top: 1px solid rgb(229, 229, 229);
    padding-top: 1rem;
`;


export default LoginModal;
