import React from 'react';
import "./FontAwesome";
import '../styles/layout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const renderComponent = () => {
    const isTravelPath = /^\/travel(\/.*)?$/.test(location.pathname);
    const isCommnuPath = /^\/community(\/.*)?$/.test(location.pathname);
    const isCalendarPath = /^\/calendar(\/.*)?$/.test(location.pathname);
    const isMypagePath = /^\/mypage(\/.*)?$/.test(location.pathname);
    if (isTravelPath) {  // 여행 
      return (
        <>
          <Link to="/travel" className="main-link">
            <FontAwesomeIcon
              icon="suitcase-rolling"
              size="xl"
              className="logo-icon-wrapper"
              style={{marginRight : "10px"}}
            />
            WORAVEL
          </Link>
          <div className="search-icon-wrapper">
            <FontAwesomeIcon
              icon="magnifying-glass"
              size="xl"
              className=""
            />
          </div>
        </>
      );
    } else if(isCommnuPath){ // 커뮤
      return (
        <>
        <Link to="/community" className="main-link">
          커뮤니티
          </Link>
        </>
      )
    }else if(isCalendarPath){ // 캘린더 페이지 
      return (
        <>
        <Link to="/calendar" className="main-link">
            캘린더
          </Link>
        </>
      )
    }else if(isMypagePath){ // 마이 페이지 
      return (
        <>
        <Link to="/mypage" className="main-link">
          마이페이지
          </Link>
        </>
      )
    }
    else { // 홈화면 
      return (
        <>
          <Link to="/" className="main-link">
            <FontAwesomeIcon
              icon="file"
              size="xl"
              className="logo-icon-wrapper"
              style={{marginRight : "10px"}}
            />
            WORAVEL
          </Link>
          <div className="search-icon-wrapper">
            <FontAwesomeIcon
              icon="magnifying-glass"
              size="xl"
              className=""
            />
          </div>
        </>
      );
    } 
  };

  return (
    <div className='header-wrap'>
      {renderComponent()}
    </div>
  );
}
