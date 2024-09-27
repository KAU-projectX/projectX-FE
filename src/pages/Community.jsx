import React from 'react'
import styled from 'styled-components'



const CommunityWrapper = styled.div`
  width : 100%;
  height : 100%; 
  text-align : center;
  padding : 50px 0 ;

`


export default function Community() {
  return (
    <div style={{height : "100%"}}>
      <CommunityWrapper>
        <div className = "hot-topic-wrapper">
        </div>
      </CommunityWrapper>
    </div>
    
  )
}
