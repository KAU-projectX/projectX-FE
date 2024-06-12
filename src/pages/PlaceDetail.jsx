import React, { useEffect, useState } from 'react'
import '../styles/main.css'
import { useLocation, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import KakaoMap from '../components/KakaoMap';
import logo from '../assets/img/kakaomap_basic.png'
import SuggestedPlaces from '../components/\bSuggestedPlaces';
import styled from 'styled-components';


const Wrapper = styled.div `
display : flex;
overflow-x : scroll;
min-width: 100%;
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

export default function PlaceDetail({ updateClickedName }) {

  const { name } = useParams();
  const decodedName = decodeURIComponent(name);

  useEffect(() => {
    updateClickedName(decodedName);
  }, [decodedName, updateClickedName]);


  const {state} = useLocation();
  const [savePlace,setSavePlace] = useState(0);

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
      name: "개쩌는 북카페",
      address: "제주 제주시 조천읍 신북로 453 도토관",
      img_src: [ "https://mblogthumb-phinf.pstatic.net/MjAyMzAzMTdfMjM3/MDAxNjc5MDQyMjI5ODYy.6TU04oH0AC3eD_8gFoqcWQdNKxbse03Mm7jgHwsB7ucg.581kNlJScHA2fDFN2FLnwjGf1vF41zYgueARpQgad_Ug.JPEG.hyeyoung217/20230313%EF%BC%BF155851.jpg?type=w800"],
    },
    {
      name: "개처지리는 북카페",
      address: "제주 제주시 구좌읍 고양이로 453" ,
      img_src: [ "https://mblogthumb-phinf.pstatic.net/MjAyMzAzMTdfMjM3/MDAxNjc5MDQyMjI5ODYy.6TU04oH0AC3eD_8gFoqcWQdNKxbse03Mm7jgHwsB7ucg.581kNlJScHA2fDFN2FLnwjGf1vF41zYgueARpQgad_Ug.JPEG.hyeyoung217/20230313%EF%BC%BF155851.jpg?type=w800"],
    },
    {
      name: "개처지리는 북카페",
      address: "제주 제주시 구좌읍 고양이로 453" ,
      img_src: [ "https://mblogthumb-phinf.pstatic.net/MjAyMzAzMTdfMjM3/MDAxNjc5MDQyMjI5ODYy.6TU04oH0AC3eD_8gFoqcWQdNKxbse03Mm7jgHwsB7ucg.581kNlJScHA2fDFN2FLnwjGf1vF41zYgueARpQgad_Ug.JPEG.hyeyoung217/20230313%EF%BC%BF155851.jpg?type=w800"],
    },
  ]

  const suggestedTravel = [
    {
      name: "개쩌는 노는곳",
      address: "제주 제주시 조천읍 신북로 453 도토관",
      img_src: [ "https://mblogthumb-phinf.pstatic.net/MjAyMzAzMTdfMjM3/MDAxNjc5MDQyMjI5ODYy.6TU04oH0AC3eD_8gFoqcWQdNKxbse03Mm7jgHwsB7ucg.581kNlJScHA2fDFN2FLnwjGf1vF41zYgueARpQgad_Ug.JPEG.hyeyoung217/20230313%EF%BC%BF155851.jpg?type=w800"],
    },
    {
      name: "개처지리는 놀기 좋은 곳 곳 거ㅗㅅ",
      address: "제주 제주시 구좌읍 고양이로 453" ,
      img_src: [ "https://mblogthumb-phinf.pstatic.net/MjAyMzAzMTdfMjM3/MDAxNjc5MDQyMjI5ODYy.6TU04oH0AC3eD_8gFoqcWQdNKxbse03Mm7jgHwsB7ucg.581kNlJScHA2fDFN2FLnwjGf1vF41zYgueARpQgad_Ug.JPEG.hyeyoung217/20230313%EF%BC%BF155851.jpg?type=w800"],
    },
    {
      name: "개처지리는 MT장소",
      address: "제주 제주시 구좌읍 고양이로 453" ,
      img_src: [ "https://mblogthumb-phinf.pstatic.net/MjAyMzAzMTdfMjM3/MDAxNjc5MDQyMjI5ODYy.6TU04oH0AC3eD_8gFoqcWQdNKxbse03Mm7jgHwsB7ucg.581kNlJScHA2fDFN2FLnwjGf1vF41zYgueARpQgad_Ug.JPEG.hyeyoung217/20230313%EF%BC%BF155851.jpg?type=w800"],
    },
  ]

  




  return (
    <div className='place-detail-wrapper'>
      <div className = "place-img-wrapper">
      {state.img_src.map((src, index) => (
          <img key={index} src={src} style={{ maxWidth: "100%", height: "197px" }} alt={`${index}`}/>
        ))}
      </div>

      <div className ="place-info-wrapper">
        <div className = "place-first-line">
          <div className = "place-tel-wrapper"> 
            <FontAwesomeIcon icon ="fa-phone" style={{color:"#F8D3BF"}} size = "lg"  />
            <a href={`tel:${state.tel}`}> {state.tel} </a>
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
          <div onClick={()=> handleCopyClick(`${state.address}`)} style={{marginLeft:"8px", fontSize : "16px"}}> 
          {state.address}  
          &nbsp;  
          <FontAwesomeIcon icon="fa-copy" size = "sm"/>
          </div>

        </div>


        <div className ="detail-map-wrapper" style={{margin : "20px 0"}}>
          <div style={{display:"flex", fontSize:"16px", fontFamily :"sans-serif"}}>
            <img src = {logo} alt = "카카오맵" style={{maxWidth : "25px"}}/>
            &nbsp; 카카오맵   
          </div>
          <div> &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;
            <a href='https://place.map.kakao.com/m/528690715' style={{fontSize:"14px"}}>https://place.map.kakao.com/m/528690715 </a>
            <KakaoMap Lat={state.lat} Lng = {state.lng}/>
          </div>
          
        </div>


        <hr/>
        <div className='work-place-wrapper' style={{marginBottom : "20px"}}>
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
