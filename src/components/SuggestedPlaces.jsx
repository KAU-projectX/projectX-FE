import React from 'react'
import styled from 'styled-components'

export default function SuggestedPlaces({place}) {
  
  let rename = (place.name.length > 12 )? place.name.substr(0,11)+'..' : place.name;
  let readdress = (place.address.length > 13)? place.address.substr(0,12)+'..' : place.address;


  const Box = styled.div `
  padding : 0 15px 0 0 ; 
    
  `;

  const Title = styled.div `
    font-family : "sans-serif";
    font-size : 16px;
    font-weight : 700;
    `

  return (
    <div className = "sug-place-wrapper">
      <Box>
        <img src = {place.img_src} alt="?" style={{maxWidth:"150px",maxHeight:"150px", minWidth:"150px",minHeight:"150px",overflow:"hidden", borderRadius : "5px"}}/>
        <Title>{rename} </Title>
        <div style={{color : "#8C8D8A", fontSize:"14px"}}> {readdress} </div>
      </Box>  


    </div>
  );



}
