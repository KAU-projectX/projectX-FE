import React from 'react'
import '../styles/main.css'
import Attraction from '../components/Attraction';


// function Attraction({ place }) {
//   const navigate = useNavigate();
//   const onClickPlaceItem=()=>{
//     navigate(`/main/${place.name}`, { state: place });
//   }

//   return (
//     <div className='attraction-wrapper' onClick={onClickPlaceItem}>
//       <div style={{fontWeight:"bold", fontSize:"20px", padding:"10px 0px 5px 0px"}}>{place.name}</div>
//       <div className="address" style={{fontWeight:"light", fontSize:"13px"}}>{place.address}</div>
//       <div className="attraction-img-wrapper">
//         {place.img_src.map((src, index) => (
//           <img key={index} src={src} style={{ maxWidth: "100%", height: "236px" }} alt={`${index}`}/>
//         ))}
//       </div>
//     </div>
//   )
// }

const attractionPlace = [
  {
    name: "북카페 도토관",
    address: "제주 제주시 조천읍 신북로 453 도토관",
    img_src: ["https://mblogthumb-phinf.pstatic.net/MjAyMzAzMDlfMTg3/MDAxNjc4MzU1NTQzMzgx.LXcxAgKKqVG6-miGSjvWlF3tFQoxtPkV3iKDZujnHA8g.4Ez-IGzEjwrNFrDUHZlEEWSFHriFJV5Ecb39HG0uZxsg.PNG.somciss/image.png?type=w800", "https://mblogthumb-phinf.pstatic.net/MjAyMzAzMTdfMjM3/MDAxNjc5MDQyMjI5ODYy.6TU04oH0AC3eD_8gFoqcWQdNKxbse03Mm7jgHwsB7ucg.581kNlJScHA2fDFN2FLnwjGf1vF41zYgueARpQgad_Ug.JPEG.hyeyoung217/20230313%EF%BC%BF155851.jpg?type=w800","https://mblogthumb-phinf.pstatic.net/MjAyMzEwMzBfMzUg/MDAxNjk4NjY0MTU0MDI1.DKZgw_wJpnd2fcscagl-o8G60NYWc30n0GGFzRQFsXgg.5xALXO1WLfaJAPpd3c3XZGlD5HiH_hbtmEa2DGTFykgg.JPEG.dusalswls421/20231022%EF%BC%BF130301.jpg?type=w400"]
  },
  {
    name: "유람위드북스",
    address: "제주 제주시 한경면 조수동2길 54-36",
    img_src: ["https://mblogthumb-phinf.pstatic.net/MjAyMTAzMTlfMjA0/MDAxNjE2MTE5MDU4MTE4.70s7l5io5eYxM7fFi2p-n81cNiduLiK6kkdQd1YoUGcg.nvgIk3hL1mhY_KPfbU99rd_toyzUcsSZ7BEBR3Lh7D0g.JPEG.bluebuskr/20201004_160007.jpg?type=w800","https://t4.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/40Qx/image/6CRr6AGG1vZzYHj-T6QJsyqBtGc.jpg","https://ak-d.tripcdn.com/images/0102y2224na9oq4wgBB2E.jpg?proc=source/trip"]
  },
  {
    name: "종달리746",
    address: "제주 제주시 구좌읍 종달동길 29-9",
    img_src: ["https://mblogthumb-phinf.pstatic.net/MjAyMDAxMTRfNjIg/MDAxNTc5MDEzMzIwNDA3.zDCh-DYcR5YAlNaymBOv0hDdzGPDrQPFLz3A534QbwEg.NcE4hIJyOpScT8Hp5JUd7y6AuyH-zITKhA-yl7i2HCwg.JPEG.jooeungen/SE-6f50f594-28cd-4ff3-a6eb-27730044c63f.jpg?type=w800","https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=https://t1.daumcdn.net/brunch/service/user/b8n7/image/dMvdnBIhoI65C0CIBFb0oR5Nu7I"]
  },

]

export default function Main() {
  return (
    <div className = "main-page-wrapper">
      <div className="main-attraction-wrapper">
        {attractionPlace.map((place, index) => (
          <Attraction key={index} place={place}/>
        ))}
      </div>
    </div>
  )
}
