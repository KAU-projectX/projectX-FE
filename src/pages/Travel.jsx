import Places from '../components/Places'




const attractionPlace = [
  {
    id : 1,
    name: "아쿠아플라넷 제주",
    address: "제주 서귀포시 성산읍 섭지코지로 95",
    imgSrc: "https://lh3.googleusercontent.com/p/AF1QipON4GQJ04L2su7hZ1-XVwKdOphhAayfJOoxPCbO=s1360-w1360-h1020"
  },
  {
    id : 2,
    name: "신양섭지해수욕장",
    address: "제주 서귀포시 성산읍 섭지코지로 88",
    imgSrc: "https://api.cdn.visitjeju.net/photomng/imgpath/201908/08/9d19a7d3-97a8-4999-b849-123e46fc88bc.jpg"
  },


]

export default function Travel() {

  // const [travelPlaces, setTravelPlaces] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try{
  //       const travelResponse = await axios.get(`http://43.200.247.44/v1/travel`,{});
  //       setTravelPlaces(travelResponse.data);
  //     }catch(error){
  //       console.error("Error fetching data : ", error)
  //       return (
  //         <div>
  //           반환된 데이터가 없습니다. 
  //         </div>
  //       )
  //     }
  //   }

  //   fetchData();
  // },[])



  return (
    <div className='travel-page-wrapper'>
      <div className="main-attraction-wrapper">
        {attractionPlace.map((place, index) => (
          <Places key={index} place={place}/>
        ))}

      </div>
    </div>
  )
}


