import React, { useEffect, useState } from 'react'
import '../styles/main.css'
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function PlaceDetail() {
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

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_API_KEY&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(37.506320759000715, 127.05368251210247),
          level: 3
        };
        new window.kakao.maps.Map(container, options);
      });
    };
  }, []);




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



        

        <div className='place-address-wrapper'> 
          <FontAwesomeIcon icon = "fa-location-dot" style={{color:"#F8D3BF"}} size = "xl" />
          <div onClick={()=> handleCopyClick(`${state.address}`)} style={{marginLeft:"8px", fontSize : "16px"}}> 
          {state.address}  
          &nbsp;  
          <FontAwesomeIcon icon="fa-copy" size = "sm"/>
          </div>

        </div>


        <div className ="detail-map-wrapper">
          <div>(카카오 로고 src) 카카오맵 </div>
          <a href='link'> 이 링크는 어디서 제공 ?  </a>
        <div id="map" style={{ width: '300px', height: '200px', borderRadius: '20px' }}></div>
        </div>
      </div>

      
    </div>
  )
}
