import React, {  useEffect, useState } from 'react'
import '../styles/main.css'
import Attraction from '../components/Places';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';


export default function Main ({ updateClickedPlace }) {

  const [bookCafes, setBookCafes] = useState([]);
  const [libraries, setLibraries] = useState([]);
  const [cafes, setCafes] = useState([]);
  const [franchise, setFranchise] = useState([]);
  

  const handleClick = (name) => {
    updateClickedPlace(name);
  };

  useEffect(() => {
    const fetchData = async () => {

      // 1. 북카페 
      try {
        const bookCafesResponse = await axios.get(`http://43.200.247.44/v1/work/?page=0&cafeType=1`, {
        });
        setBookCafes(bookCafesResponse.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }

      // 2. 개인 카페 
      try {
        const personalCafesResponse = await axios.get(`http://43.200.247.44/v1/work/?page=0&cafeType=2`, {
        });
        setCafes(personalCafesResponse.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }

      //3. 프랜차이즈 
      try {
        const franchiseResponse = await axios.get(`http://43.200.247.44/v1/work/?page=0&cafeType=3`, {
        });
        setFranchise(franchiseResponse.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }

      // 4. 도서관 
      try {
        const librariesResponse = await axios.get(`http://43.200.247.44/v1/work/?page=0&cafeType=4`, {
        });
        setLibraries(librariesResponse.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  const filters = [bookCafes, libraries, cafes,franchise];
  const filtersKor = ["북카페","도서관","카페","프렌차이즈"]

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
        <div style={{padding: "0px 5px", fontSize :"16px", fontWeight:"700"}}> &nbsp; {filtersKor[pageSlider] }&nbsp;   </div>
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
