


import React from 'react'
// import SocialKakao from '../components/\bSocialKakao'


export default function Login() {

  const REST_API_KEY = '20483329cf0b7ad5c283f195f697d397';
  const REDIRECT_URI = 'http://woravel.com/login/callback';
  const link = 'https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code';

  const loginHandler =()=> {
    window.location.href = link;
  }


  return (
    <div className = "login-page-wrapper" >
      <div className ="infoforyou-text" >탐라는 지금, Woravel </div>
      <div className ="logo-wrapper"> 
      <h2> Woravel</h2>
      </div>
      <div className ="kakao-login-wrapper">
        <button type="button" onClick = {loginHandler}> 로그인을 해봅시당 </button>
        {/* <SocialKakao/> */}
      </div>



    </div>
  )
}
