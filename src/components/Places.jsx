import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/main.css'
import defaul_img from '../assets/img/default_img.svg'

// 메인 페이지에 나타나는 이미지 ! 
export default function Places({ place }) {
    const navigate = useNavigate();
    const location = useLocation();

    const onClickPlaceItem=()=>{
        if (location.pathname === '/travel') {
            navigate(`/travel/${place.id}`, { state: place });
        }else if(location.pathname === '/main'){
            navigate(`/main/${place.id}`, { state: place });
        }
    }
  
    return (
      <div className='places-wrapper' onClick={onClickPlaceItem}>

        <div className = "places-text-wrapper">
          <div style={{fontWeight:"bold", fontSize:"20px", padding:"10px 0px 5px 0px"}}>{place.name}</div>
          <div className="address" >{place.address}</div>
          <div className = "telAndTime">
            {place.phone}
            {place.open_time && " | " + place.open_time + "에 영업시작"}
          </div> 

        </div>

        <div className="places-img-wrapper">

            <img  src={place.imgSrc ? place.imgSrc : defaul_img} alt={`${place.name}`}/>
        </div>
      </div>
    )
}

