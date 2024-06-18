import React from 'react';
import styled from 'styled-components';
import kakaoLogo from './kakaologin.png';
import naverLogo from './naverlogin.png';
import WoravelLogo from './Group 7239.svg';

const LoginText = styled.div`

  margin :250px 0px 100px 0  ;
  text-align : center;
  font-size: 16px;

  span { 
    font-weight : 700;
  }
  
  h2{
    font-size : 25px;
    font-weight : 650;
  }
`

const BtnWrapper = styled.div`
  display:flex;
  justify-content : space-between;
  margin : 50px;
  font-size : 13px;
  color : #3E3F3C;

  img{
    width: 50px;
    height : 50px;
    padding : 10px;
  }

  span { 
    margin-left: 5px;
  }
`

const LoginBtn = styled.div`
  text-align : center;
`

const LoginModal = () => {

  //카카오 로그인 
  const REST_API_KEY= process.env.REACT_APP_REST_API_KEY
  const REDIRECT_URL = process.env.REACT_APP_REDIRECT_URL //Redirect URI
  console.log('test 하고 지우기 | REST_API_KEY : ', REST_API_KEY);
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code`
      
  const handleKakaoLoginClick = () =>{
    console.log('test하고 지우기 | loginClick')
    window.location.href = kakaoURL
  }

  return (
    <div>
      <LoginText>
        <h2>WORAVEL</h2>
        <div>제주도에서 <span style = {{color:'#FF9559'}}>WORK</span>와 <span style = {{color:'#8BCDFB'}}>TRAVEL</span>을 동시에! </div>
        <div>디지털 노마드의 삶을 응원합니다!</div>

      </LoginText>

      <BtnWrapper>
        <LoginBtn onClick={handleKakaoLoginClick}>
          <img src = {kakaoLogo} alt = "카카오 로그인"/>
          <div>카카오 로그인 <span>  | </span> </div>
        </LoginBtn>
        <LoginBtn>
          <img src = {naverLogo} alt = "네이버 로그인"/>
          <div>네이버 로그인 <span>  | </span> </div>

        </LoginBtn>
        <LoginBtn onClick={() => window.location.href = '/main'}>
          <img src = {WoravelLogo} alt = "워래블 로그인"/>
          <div>로그인 없이<br/> 둘러볼게요!</div>
        </LoginBtn>
      </BtnWrapper>
    </div> 
  );
};

export default LoginModal;