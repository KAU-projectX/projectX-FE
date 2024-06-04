import React from 'react'
import Attraction from '../components/Attraction';




const attractionPlace = [
  {
    name: "아쿠아플라넷 제주",
    address: "제주 서귀포시 성산읍 섭지코지로 95",
    img_src: [ "https://lh3.googleusercontent.com/p/AF1QipON4GQJ04L2su7hZ1-XVwKdOphhAayfJOoxPCbO=s1360-w1360-h1020","https://lh3.googleusercontent.com/p/AF1QipMGL49gFbEas4g5u-p54rjV0i8hUGUoHhj8t0qL=s1360-w1360-h1020","https://lh3.googleusercontent.com/p/AF1QipMm9wLU0u2XHEcKQgH1qe2g8E_0HV_zRpomWws1=s1360-w1360-h1020"]
  },
  {
    name: "신양섭지해수욕장",
    address: "제주 서귀포시 성산읍 섭지코지로 88",
    img_src: ["https://api.cdn.visitjeju.net/photomng/imgpath/201908/08/9d19a7d3-97a8-4999-b849-123e46fc88bc.jpg","https://lh6.googleusercontent.com/proxy/DP7FivJzuIE95EZsd1gW7MYhwpmsZvqI5ZATDB1bYhOJZle0wPRF1jUf0ZztkEIf4oHBSz94EYVaQ2955nXWH1ux1yJ-9yhQu2opxOnR2RUIvaOtIXhtQVWJEO7ouB2QNf3UDE97c0S8yHEWpP8","https://www.newsje.com/news/photo/202107/240854_231997_4413.jpg"]
  },


]

export default function Travel() {
  return (
    <div className='travel-page-wrapper'>
      <div className="main-attraction-wrapper">
        {attractionPlace.map((place, index) => (
          <Attraction key={index} place={place}/>
        ))}
      </div>
    </div>
  )
}


