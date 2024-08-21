import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import sugAlt from '../assets/img/sugAlt.svg'
// import travelAlt from '../assets/img/travelAlt.svg'


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
    if (location.pathname.startsWith('/travel')) {
      navigate(`/travel/${place.id}`, { state: place });
    } else if (location.pathname.startsWith('/main')) {
      navigate(`/main/${place.id}`, { state: place });
    }
    //맨 위로 가는 코드 추가 
  }
  
  let rename = (place.name.length > 12 )? place.name.substr(0,11)+'..' : place.name;
  let readdress = (place.address.length > 11)? place.address.substr(0,10)+'..' : place.address;


  

  return (
    <>
    <div className = "sug-place-wrapper" onClick={onClickPlaceItem}>
      <Box>
        <img src = {place.imageUrl ? place.imageUrl: sugAlt } alt="?" style={{maxWidth:"150px",maxHeight:"150px", minWidth:"150px",minHeight:"150px",overflow:"hidden", borderRadius : "2px"}}/>
        <Title>{rename} </Title>
        <div style={{color : "#8C8D8A", fontSize:"14px"}}> {readdress} </div>
      </Box>  
    </div>
    </>
  );
}
