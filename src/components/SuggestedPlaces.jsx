import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components'


const Box = styled.div `
    padding : 0 15px 0 0 ; 
  `;

  const Title = styled.div `
    font-family : "sans-serif";
    font-size : 16px;
    font-weight : 700;
  `;
  
export default function SuggestedPlaces({place}) {

  const navigate = useNavigate();
  const location = useLocation();


  const onClickPlaceItem=()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log('test하고 지우기 | 맨 위로 가라 ')
    if (location.pathname.startsWith('/travel')) {
      navigate(`/travel/${place.name}`, { state: place });
    } else if (location.pathname.startsWith('/main')) {
      navigate(`/main/${place.name}`, { state: place });
    }
    //맨 위로 가는 코드 추가 

  }
  
  let rename = (place.name.length > 12 )? place.name.substr(0,11)+'..' : place.name;
  let readdress = (place.address.length > 13)? place.address.substr(0,12)+'..' : place.address;


  

  return (
    <div className = "sug-place-wrapper" onClick={onClickPlaceItem}>
      <Box>
        <img src = {place.img_src} alt="?" style={{maxWidth:"150px",maxHeight:"150px", minWidth:"150px",minHeight:"150px",overflow:"hidden", borderRadius : "5px"}}/>
        <Title>{rename} </Title>
        <div style={{color : "#8C8D8A", fontSize:"14px"}}> {readdress} </div>
      </Box>  
    </div>
  );
}
