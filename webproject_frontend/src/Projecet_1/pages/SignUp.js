import styled from "styled-components";

const SignUp = () => {


    return (
        <div>
        <div>
            <LoginContainer>
                <ContentsContainer>
                    <MainName>
                        {/* <img style={{width:"30px", height:"38px", marginRight:"8px"}} src={thunderlogo}/> */}
                        <TextMain>ReUseIt 회원가입</TextMain>
                    </MainName>
                    <div>
                        <TextSub>ID/PW/이메일을 모두 입력해주세요!</TextSub>
                    </div>
                    <div>
                        <div>
                            <IDPW>ID</IDPW>
                            <Input placeholder="아이디를 입력해주세요!" type="text" />
                        </div>
                        <div>
                            <IDPW>E-MAIL</IDPW>
                            <Input placeholder="이메일을 입력해주세요!" type="text" />
                        </div>
                        <div>
                            <IDPW>패스워드</IDPW>
                            <Input placeholder="비밀번호를 입력해주세요!" type="password"  />
                        </div>
                        <div>
                            <IDPW>패스워드 재확인</IDPW>
                            <Input placeholder="비밀번호를 다시 입력해주세요!" type="password" />
                        </div>
                    </div>
                    <LoginBtn>회원가입</LoginBtn>
                </ContentsContainer>
            </LoginContainer>
        </div>
    </div>
    )
}

const LoginContainer = styled.div`
    margin: 80px auto 80px;
    width: 300px;
    height: 500px;
    background: rgb(255, 255, 255);
    padding: 60px;
    box-shadow: rgb(0 0 0 / 10%) 0px 3px 6px 0px;
    font-size: 14px;
    color: rgb(30, 29, 41);
`;

const ContentsContainer = styled.div`
    width: 100%;
    margin:0 auto;
`;

const MainName = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
`;

const TextMain = styled.div`
    font-size: 30px;
    white-space: pre-wrap;
    line-height: 1.2;
    margin-bottom: 15px;
`;

const TextSub = styled.div`
    line-height: 1.5;
    font-size: 14px;
    margin-bottom: 40px;
    display:flex;
    text-align: center;
    justify-content: center;
`;

const Input = styled.input`
    width: 100%;
    margin-bottom: 7px;
    height: 40px;
    border: 1px solid #eeeeee;
    box-shadow: rgb(0 0 0 / 10%) 0px 3px 6px 0px;
`;

const LoginBtn = styled.button`
    margin-top: 30px;
    background: rgb(96, 174, 232);
    color: rgb(255, 255, 255);
    width: 100%;
    height: 6rem;
    line-height: 3.5rem;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 30px;
    text-align: center;
    vertical-align: middle;
    border:none;
`;

const IDPW = styled.div`
    font-weight: bold;
    font-size: 14px;
    color: rgb(33,33,33); 
    margin: 5px 0px 5px 5px;  
`;

export default SignUp;