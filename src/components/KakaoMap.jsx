import React, { useEffect } from 'react'

export default function KakaoMap({Lat,Lng}) {

    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
    
        const kakaoMapKey = process.env.REACT_APP_JAVA_SCRIPT_KEY;
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoMapKey}&autoload=false`;
        document.head.appendChild(script);
    
        script.onload = () => {
          window.kakao.maps.load(() => {
            const container = document.getElementById('map');
            const options = {
              center: new window.kakao.maps.LatLng(Lat, Lng),
              level: 3
            };
            const map = new window.kakao.maps.Map(container, options);

            const markerPosition = new window.kakao.maps.LatLng(Lat, Lng);
            const marker = new window.kakao.maps.Marker({
              position: markerPosition
            });
            marker.setMap(map);
            
          });
          
        };
      }, [Lat,Lng]);

  return (
    <div id="map" style={{ minWidth: '100%', minHeight: '200px', borderRadius: '20px' }}></div>
  )
}



/*

//주소 API 사용 
  


  */