import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Redirection() {
  const navigate = useNavigate();
  const code = window.location.search;

  useEffect(()=>{
    console.log(process.env.REACT_APP_URL);
    axios.post(`${process.env.REACT_APP_URL}kakaoLogin${code}`).then((r) => {
      console.log(r.data);

      localStorage.setItem('name', r.data.user_name); // 일단 이름만 저장했다.
      
      navigate('/loginSuccess');
    });
  },);
  


  return (
    <div>로그인 중입니다.</div>
  )
}
