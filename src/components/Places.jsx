import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/main.css'

export default function Places({ place }) {
    const navigate = useNavigate();
    const location = useLocation();

    const onClickPlaceItem=()=>{
        if (location.pathname === '/travel') {
            navigate(`/travel/${place.name}`, { state: place });
        }else if(location.pathname === '/main'){
            navigate(`/main/${place.name}`, { state: place });
        }
    }
  
    return (
      <div className='places-wrapper' onClick={onClickPlaceItem}>

        <div className = "places-text-wrapper">
          <div style={{fontWeight:"bold", fontSize:"20px", padding:"10px 0px 5px 0px"}}>{place.name}</div>
          <div className="address" >{place.address}</div>
          <div className = "telAndTime">
            {place.tel}
            {place.open_time && " | " + place.open_time + "에 영업시작"}
          </div> 

        </div>

        <div className="places-img-wrapper">
            <img  src={place.img_src[0]} alt={`${place.name}`}/>
        </div>
      </div>
    )
}

