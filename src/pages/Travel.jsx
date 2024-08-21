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
    imgSrc: ""
  },
  {
    id : 3, 
    name: "스누피가든",
    address: "제주특별자치도 제주시 특별자치도 구좌읍 금백조로 930",
    imgSrc: "https://lh3.googleusercontent.com/p/AF1QipNQSLyhKLdtHBYvomfMK9tWy2pjVWEOZkzDKc_c=s294-w294-h220-k-no",

  },
  {
    id : 4,
    name: "협재해변",
    address: "제주특별자치도 제주시 한림읍 한림로 329-10",
    imageUrl: "https://lh3.googleusercontent.com/p/AF1QipNFmem5tBp7EDwMWE2eUNzWkwbvMUnsuenKD7Na=s294-w294-h220-k-no"
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


