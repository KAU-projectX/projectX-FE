import React, {useContext, useEffect, useState } from 'react'
import '../styles/main.css'
import { useLocation, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import KakaoMap from '../components/KakaoMap';
import kakaoLogo from '../assets/img/kakaomap_basic.png'
import SuggestedPlaces from '../components/\bSuggestedPlaces';
import styled from 'styled-components';
import altImg from '../assets/img/PlacesAlt.svg';
import largeAltImg from '../assets/img/LargeAlt.png'
import axios from 'axios';
import { PlaceContext } from '../contexts/clickedPlaceContexts';


const LargeImg = styled.div`
  flex: 1;
  min-width : 228px;
  max-width : 228px;
  max-height : 227px;
  overflow : hidden;
  margin-right : 3px;
  border : 1px solid #FF9559;

  img{
    width : 100%;
    height : 100%;
    overflow : hidden;
  }
`

const SmallImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width : 121px;
  position: relative;


  img{
    max-width: 100%;
    min-height: 49%;
    max-height : 49%;
    object-fit: cover;
    overflow: hidden;

  }
`

const Wrapper = styled.div `
  display : flex;
  overflow-x : scroll;
  overflow-y : hidden;
  min-height:100%;
  min-width: 100%;
  margin-bottom : 60px;

`


const Title = styled.div `
color: ${props => props.color || 'black'};
font-family : 'sans-serif';
font-weight : 800;
font-size : 20px ;
padding : 10px 0 ;
`

const Text = styled.div`
font-size : 13px;
color : #3E3F3C;

`

export default function PlaceDetail({ updateClickedPlace }) {
  const location = useLocation()
  const { id } = useParams();
  const [savePlace,setSavePlace] = useState(0);
  const [detailPlace,setDetailPlace] = useState(null);
  const { setPlaceName } = useContext(PlaceContext); // Context 사용
  

  useEffect(() => {
    let API_URL = ""

    if(location.pathname.startsWith('/main')) {
      API_URL = 'http://43.200.247.44/v1/work/'
    }else if(location.pathname.startsWith('/travel')) {
      API_URL = 'http://43.200.247.44/v1/travel/'
    }

    const fetchData = async () => {
      try {
        const stateResponse = await axios.get(`${API_URL}${id}`);
        setDetailPlace(stateResponse.data.data); // 받아온 데이터를 상태로 저장
        setPlaceName(stateResponse.data.data.name);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (location.pathname.startsWith('/main')) {
      fetchData();
    }
  }, [id, location.pathname,setPlaceName]); // location.pathname이 변경될 때만 실행

  

  const toggleSavePlace = () => {
    setSavePlace(prevSavePlace => (prevSavePlace === 0 ? 1 : 0));
  };

  const handleCopyClick = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy)
      .then(()=> {
        alert("클립보드가 복사되었습니다.");
      })
      .catch((error) => {
        alert("복사 실패 : ",error)
      })
  }


  

  const suggestedWork = [
    {
      id: 56,
      name: "더브릿지  ",
      address: "제주특별자치도 서귀포시 안덕면 사계리 2033 ",
      phone: "",
      imageUrl: "https://mblogthumb-phinf.pstatic.net/MjAyMTA0MThfMjgz/MDAxNjE4NzU3Mjk5Mjgy.IvQ0ViDDO9fAqufvAhqbsukKicbeS9rqMgvHdfftLEsg.Kkr_DYYEPOeuYXbIQWv2Pncpwv9cuQ_epkmgfz_s56cg.JPEG.susuin/IMG_6027.jpg?type=w800"
    },
    {
      id: 58,
      name: "도깨비방망이  ",
      address: "제주특별자치도 제주시 한림읍 대림리 1774-2 ",
      phone: "",
      imageUrl: ""
    },
    {
      id : 66,
      name: "카페봄봄 혁신도시점",
      address: "제주특별자치도 서귀포시 강정동  208-5" ,
      phone: "064-738-180",
      imgSrc: "",
    },
  ]

  const suggestedTravel = [
    {
      name: "개쩌는 노는곳",
      address: "제주 제주시 조천읍 신북로 453 도토관",
      imgSrc: [ "https://mblogthumb-phinf.pstatic.net/MjAyMzAzMTdfMjM3/MDAxNjc5MDQyMjI5ODYy.6TU04oH0AC3eD_8gFoqcWQdNKxbse03Mm7jgHwsB7ucg.581kNlJScHA2fDFN2FLnwjGf1vF41zYgueARpQgad_Ug.JPEG.hyeyoung217/20230313%EF%BC%BF155851.jpg?type=w800"],
    },
    {
      name: "개처지리는 놀기 좋은 곳 곳 거ㅗㅅ",
      address: "제주 제주시 구좌읍 고양이로 453" ,
      imgSrc: [ "https://mblogthumb-phinf.pstatic.net/MjAyMzAzMTdfMjM3/MDAxNjc5MDQyMjI5ODYy.6TU04oH0AC3eD_8gFoqcWQdNKxbse03Mm7jgHwsB7ucg.581kNlJScHA2fDFN2FLnwjGf1vF41zYgueARpQgad_Ug.JPEG.hyeyoung217/20230313%EF%BC%BF155851.jpg?type=w800"],
    },
    {
      name: "개처지리는 MT장소",
      address: "제주 제주시 구좌읍 고양이로 453" ,
      imgSrc: [ "https://mblogthumb-phinf.pstatic.net/MjAyMzAzMTdfMjM3/MDAxNjc5MDQyMjI5ODYy.6TU04oH0AC3eD_8gFoqcWQdNKxbse03Mm7jgHwsB7ucg.581kNlJScHA2fDFN2FLnwjGf1vF41zYgueARpQgad_Ug.JPEG.hyeyoung217/20230313%EF%BC%BF155851.jpg?type=w800"],
    },
  ]


  if (!detailPlace) {
    // detailPlace가 로드될 때까지 로딩 상태를 표시하거나 빈 화면을 표시
    return <div>Loading...</div>;
  }


  const phoneNum = detailPlace.phone ? detailPlace.phone : ""
  const Address = detailPlace.address ? detailPlace.address : ""
  const latitude = detailPlace.latitude ? detailPlace.latitude : ""
  const longitude = detailPlace.longitude ? detailPlace.longitude : "" 
  const url = detailPlace.url ? detailPlace.url : "" 

  // 사진 추출 
  const images = detailPlace?.imgSrc ?? [];
  const defaultImg = altImg;
  const displayImg = images.slice(0, 3);
  const imgText = images.length >= 3 
  ? "더보기" 
  : (
    <>
      리뷰를 작성해
      <br />
      사진을 추가하세요!
    </>
  );
  





  return (
    <div className='place-detail-wrapper'>
      <div className = "detail-img-wrapper">
        <LargeImg>
          <img src={displayImg[0] || largeAltImg} alt='1st img' />
        </LargeImg>
        <SmallImg>
            <img src={displayImg[1] || defaultImg} alt='small' />
            <img  className = "blur-img-wrapper" src={displayImg[2] || defaultImg} alt='small' />
            <p className = "blur-image-text" style={{ fontSize: images.length > 2 ? "16px" : "10px" }}>{imgText}</p>
        </SmallImg>
      </div>

      <div className ="place-info-wrapper">
        <div className = "place-first-line">
          <div className = "place-tel-wrapper"> 
            <FontAwesomeIcon icon ="fa-phone" style={{color:"#F8D3BF"}} size = "lg"  />
            <a href={`tel:${phoneNum}`}> {phoneNum} </a>
          </div>
          <div className = "place-saved-wrpper" style={{display:"flex"}}> 
              <div className = "detail-icon-wrapper">
              <FontAwesomeIcon icon="fa-regular fa-message" 
                size = "xl"/>
                
                </div>
              <div className = "detail-icon-wrapper">
                <FontAwesomeIcon icon="share-nodes"
                size = "xl"/>
                </div>
              <div className = "detail-icon-wrapper" onClick={toggleSavePlace}>
                {savePlace === 0 ? (
                  <FontAwesomeIcon icon={['far', 'bookmark']} size="xl" />
                ) : (
                  <FontAwesomeIcon icon={['fas', 'bookmark']} size="xl" />
                )}
                </div>
            </div>  
        </div>
        <hr/>



        

        <div className='place-address-wrapper' style={{margin: "10px 0"}}>
          <FontAwesomeIcon icon = "fa-location-dot" style={{color:"#F8D3BF"}} size = "xl" />
          <div onClick={()=> handleCopyClick(`${Address}`)} style={{marginLeft:"8px", fontSize : "16px"}}> 
          {Address}  
          &nbsp;  
          <FontAwesomeIcon icon="fa-copy" size = "sm"/>
          </div>

        </div>


        <div className ="detail-map-wrapper" style={{margin : "20px 0"}}>
          <div style={{display:"flex", fontSize:"16px", fontFamily :"sans-serif"}}>
            <img src = {kakaoLogo} alt = "카카오맵" style={{maxWidth : "25px"}}/>
            &nbsp; 카카오맵   
          </div>
          <div> &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;
            <a href={url} style={{fontSize:"14px"}}>{url}</a>
            <div style={{padding:"10px"}}><KakaoMap Lat={latitude} Lng = {longitude} /></div>
          </div>
        </div>


        <hr style={{margin : "40px 0 "}}/>
        <div className='work-place-wrapper'>
          <Text>이 지역의 다른 WORK 정보를 확인해보세요 ! </Text>
          <Title color ='#FF9559'> WORK </Title >

          <Wrapper >
            {suggestedWork.map((place, index) => (
            <SuggestedPlaces key={index} place={place}/>
          ))}
          </Wrapper>
          
        </div>

        <div className= "travel-place-wrapper">
          <Text>이 지역의 다른 TRAVEL 정보를 확인해보세요 ! </Text>
          <Title color = "#8BCDFB"> TRAVEL </Title >
          <Wrapper >
            {suggestedTravel.map((place, index) => (
            <SuggestedPlaces key={index} place={place}/>
          ))}
          </Wrapper>
        </div>
      </div>

      
    </div>
  )
}
