import axios from 'axios';
import React from 'react'
import styled from 'styled-components'


const Logout = styled.div`
  position : absolute;
  bottom: 60px;
  maring-bottom : 50px;
  padding : 10px;
  border : 1px solid #000;
  max-width : 100%; 
  min-width : 90%;
  border-radius : 10px;
  justify-contents : center;
  text-align : center;
`;


const handleLogout = async ()=> {
  const accessToken = localStorage.getItem('kakaoAccessToken');
  if (!accessToken) {
    console.error('Access token not found in local storage');
    alert('로그아웃 상태입니다.'); 
    return;
  }

  try{
    const res = await axios({
      method : "POST",
      url : `http://43.200.247.44/v1/member/token/logout`,
      headers : {'Authorization' : accessToken}
    })
    console.log('test하고 지우기 | res : ', res);

    alert('로그아웃 되었습니다.');

  }catch(e){
    console.log("error in Logout : ", e);

  }

  
}


export default function Mypage() {


  return (
    <div className='mypage-page-wrapper'>
      안녕하세요 !

      <div style={{marginTop:"30px"}}>
      더 많은 서비스를 이용하시려면
      <br/>
      로그인을 해주세요 
      </div>
      <Logout onClick={handleLogout}>
        로그아웃 
      </Logout>
    </div>
  )
}
