import React, { useContext } from 'react';
import "./FontAwesome";
import '../styles/layout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { PlaceContext } from '../contexts/clickedPlaceContexts';


const PlaceName = styled.div`
  font-size : 20px;
  font-weight : 700;
`

export default function Header({ clickedPlaceId }) {
  const { placeName } = useContext(PlaceContext); // Context 사용
  const location = useLocation();


  const renderComponent = () => {
    // const isMainPath = /^\/main(\/.*)?$/.test(location.pathname);
    const isMainDetailPath = /^\/main\/.+$/.test(location.pathname);
    const isTravelPath = /^\/travel(\/.*)?$/.test(location.pathname);
    const isCommnuPath = /^\/community(\/.*)?$/.test(location.pathname);
    const isCalendarPath = /^\/calendar(\/.*)?$/.test(location.pathname);
    const isMypagePath = /^\/mypage(\/.*)?$/.test(location.pathname);
    const isLoginPath = /^\/login(\/.*)?$/.test(location.pathname);
    const isReviewPath = /^\/review(\/.*)?$/.test(location.pathname);
    const isIntroPath = /^\/(\/.*)?$/.test(location.pathname);
    
    
    

    
    if (location.pathname === '/main'){ //메인 페이지 
      return (
      <>
          <Link to="/main" className="main-link">
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
        </>)
    }else if (isTravelPath) {  // 여행 
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
    }else if(isMainDetailPath) {
      return (
        <>
            <Link to="/main" className="main-link">
              <FontAwesomeIcon
                icon="arrow-left"
                size="lg"
                className=""
                style={{marginRight : "10px"}}
              /></Link>

              <PlaceName>{placeName && <div>{placeName}</div>}</PlaceName>

              <div className="search-icon-wrapper">
                <FontAwesomeIcon
                  icon="magnifying-glass"
                  size="xl"/>
              </div>
        </>
      )
    }else if(isLoginPath || isIntroPath){
      return (
        <></>
      )
    }else if(isReviewPath){
      return (
        <>
        <Link to="/main" className="main-link">
        <FontAwesomeIcon
          icon="arrow-left"
          size="lg"
          className=""
          style={{marginRight : "10px"}}
        />리뷰작성
        </Link>

        <PlaceName>{ placeName && <div>{placeName}</div>}</PlaceName>
        </>

      )
    }
    else{
      return(
      <>
        <Link to="/main" className="main-link" style={{alignContent:"center !important" }}>
          <FontAwesomeIcon
            icon="file"
            size="xl"
            className="logo-icon-wrapper" 
            style={{marginRight : "10px"}}
          />
          WORAVEL
        </Link>
      </>
      )
    }
  };

  const isNoHeaderWrap = /^\/login(\/.*)?$/.test(location.pathname) || /^\/(\/.*)?$/.test(location.pathname) ;

  return (
    <div className={isNoHeaderWrap ? '' : 'header-wrap'}>
      {renderComponent()}
    </div>
  );
}
