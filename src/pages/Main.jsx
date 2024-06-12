import React, {  useState } from 'react'
import '../styles/main.css'
import Attraction from '../components/Places';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const bookCafes = [
  {
    name: "북 도돋 ",
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

const libraries = [
  {
    name: "도토관",
    address: "제주 제주시 조천읍 신북로 453 도토관",
    img_src: [ "https://mblogthumb-phinf.pstatic.net/MjAyMzAzMTdfMjM3/MDAxNjc5MDQyMjI5ODYy.6TU04oH0AC3eD_8gFoqcWQdNKxbse03Mm7jgHwsB7ucg.581kNlJScHA2fDFN2FLnwjGf1vF41zYgueARpQgad_Ug.JPEG.hyeyoung217/20230313%EF%BC%BF155851.jpg?type=w800"],
    tel : "0507-1406-0938", 
    open_time : "12:00",
    lat : 33.450701,
    lng : 126.570667,
  },
  {
    name: "유람위드북스",
    address: "제주 제주시 한경면 조수동2길 54-36",
    img_src: ["https://t4.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/40Qx/image/6CRr6AGG1vZzYHj-T6QJsyqBtGc.jpg"],
    tel : "0507-1406-0938",
    open_time : "11:00",

  },
  {
    name: "종달리746",
    address: "제주 제주시 구좌읍 종달동길 29-9",
    img_src: ["https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=https://t1.daumcdn.net/brunch/service/user/b8n7/image/dMvdnBIhoI65C0CIBFb0oR5Nu7I"],
    tel : "0507-1406-0938", 
    open_time : "13:00"
  },

]

const cafes = [
  {
    name: "카페 도토관",
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


export default function Main ({ updateClickedName }) {
  const handleClick = (name) => {
    updateClickedName(name);
  };

  const filters = [bookCafes, libraries, cafes];
  const filtersKor = ["북카페","도서관","카페"]

  const [ pageSlider, setPageSlider ] = useState(1);

  const prevBtnClick=()=>{
    setPageSlider((prev) => (prev === 0 ? filters.length - 1 : prev - 1));
  }

  const nextBtnClick=()=>{
    setPageSlider((prev) => (prev === filters.length - 1 ? 0 : prev + 1));
  }

  const currentFilter = filters[pageSlider]



  return (
    <div className = "main-page-wrapper">
      <div className = "main-filter-wrapper" >
        <FontAwesomeIcon icon = "angle-left" style={{padding:"3px 0px"}} onClick={prevBtnClick}/>
        <div style={{padding: "0px 5px"}}> {filtersKor[pageSlider] }  </div>
        <FontAwesomeIcon icon = "angle-right" style={{padding:"3px 0px"}} onClick={nextBtnClick}/>

      </div>
      <div className="main-attraction-wrapper">
        {currentFilter.map((place, index) => (
          <Attraction key={index} place={place} onClick={handleClick}/>
        ))}
      </div>
    </div>
  )
}
