import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export default function Redirection() {
  console.log('test하고 지우기 | 리다이랙션 들어옴 ')
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const accessToken = params.get('accessToken');

    if (accessToken) {
      // 액세스 토큰을 로컬 스토리지에 저장
      localStorage.setItem('kakaoAccessToken', accessToken);
      // 메인 페이지로 리다이렉트
      navigate('/main');
    } else {
      // 에러 처리
      console.error('Access token not found');
    }
  }, [location, navigate]);


  return (
    <div>로그인 중입니다.</div>
  )
}
