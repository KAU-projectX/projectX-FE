import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  bottom:0%;
  width:100%;
  height:30%;
  // transform: translate(-100%, -100%);
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 1);
  z-index: 999;
`;




const LoginModal = ({ onClose }) => {

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate(`/main`);
    // 여기서 실제로는 로그인 API 호출 등의 로직을 처리합니다.
    // 로그인이 성공하면 onLogin 함수를 호출하여 isLoggedIn 상태를 변경합니다.
    
  };


  return (
    <>
      <ModalOverlay onClick={onClose} />
      <ModalWrapper onClick = {handleLoginClick}>
        <h2>Login</h2>
        
      </ModalWrapper>
    </>
  );
};

export default LoginModal;