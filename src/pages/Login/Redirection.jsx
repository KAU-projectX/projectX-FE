import axios from 'axios';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// fnUserInfoCheck > 유저 정보 가져옴 
const fnUserInfoCheck = async (kakaoId, nickname) => {
  try {
    // 백엔드에 넣기 
    const response = await axios.post('https://kapi.kakao.com/v2/user/me', {
      kakaoId: kakaoId,
      nickname: nickname
    });

    // Handle the response from your backend
    if (response.data.success) {
      alert('test하고 지우기 | 사용자 : , ', response.data.user);
      // You can use the navigate hook if needed
    } else {
      console.error('User info check failed:', response.data.message);
    }
  } catch (error) {
    console.error('Error checking In fnUserInfoCheck:', error);
  }
};


// 카카오에서 액세스 토큰으로 사용자 정보 가져오기 
const getKakaoUserInfo = async (accessToken) => {
  try {
    const res = await axios({
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${accessToken}`, 
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8"
      },
      url: "https://kapi.kakao.com/v2/user/me",
    });
    // Pass the retrieved data to fnUserInfoCheck
    fnUserInfoCheck(res.data.id.toString(), res.data.kakao_account.profile.nickname); // Pass kakaoId and nickname

    alert('안녕하세요! ', res.data.kakao_account.profile.nickname, '님');
  } catch (e) {
    console.log('Error fetching Kakao user info: ', e);
  }
};

export default function Redirection() {
  console.log('Test log | Entered Redirection');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log('Test log | useEffect triggered');
    const params = new URLSearchParams(location.search);
    const accessToken = params.get('accessToken');

    if (accessToken) {
      // 로컬 스토리지에 액세스 토큰 저장 
      localStorage.setItem('kakaoAccessToken', accessToken);

      // 카카오 유저 정보 
      getKakaoUserInfo(accessToken);

      alert('Login successful!');
      navigate('/main');
    } else {
      // Access token 에러 
      console.error('Access token not found');
    }
  }, [location, navigate]);

  return (
    <div>로그인 중입니다.. </div>
  );
}
