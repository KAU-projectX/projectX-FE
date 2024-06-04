import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/main.css'

export default function Attraction({ place }) {
    const navigate = useNavigate();
    const location = useLocation();

    const onClickPlaceItem=()=>{
        if (location.pathname === '/travel') {
            navigate(`/travel/${place.name}`, { state: place });
        }else if(location.pathname === '/'){
            navigate(`/main/${place.name}`, { state: place });
        }
    }
  
    return (
      <div className='attraction-wrapper' onClick={onClickPlaceItem}>
        <div style={{fontWeight:"bold", fontSize:"20px", padding:"10px 0px 5px 0px"}}>{place.name}</div>
        <div className="address" style={{fontWeight:"light", fontSize:"13px"}}>{place.address}</div>
        <div className="attraction-img-wrapper">
          {place.img_src.map((src, index) => (
            <img key={index} src={src} style={{ maxWidth: "100%", height: "236px" }} alt={`${index}`}/>
          ))}
        </div>
      </div>
    )
}

