import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../components/FontAwesome'
import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import orange from '../assets/img/orange.png'
import gray from '../assets/img/gray.png'
import AttachPhoto from '../assets/img/AttachPhoto.png'
import ReviewText from '../assets/img/ReviewText.png'

const SelectPlace = styled.div`
    align-self: flex-end;
    margin-bottom: 20px;
    margin-right:30px;

    select {
    border: none;
    border-bottom: 2px solid black;
    padding: 2px;
    font-size: 16px;
    outline: none;
    }

`

const SelectDate = styled.div`
display: flex;
justify-content: center;
margin-bottom: 20px;
width:100%;

input {
  border: none;
  background-color: #eeeeee;
  width: 70%;
  height: 48px;
  border-radius: 10px;
  display: flex;
  align-self: center;
  text-align: center;
  font-size: 16px;
  padding: 0 10px;
}

`

const SelectStar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h4 {
    margin-bottom: 20px;
    }

    .stars {
    display: flex;
    margin-bottom: 20px;
    }

    .score{
        margin : 7px;
    }

    img {
    width: 36px;
    height: 36px;
    cursor: pointer;
    }


    .buttons button {
        margin : 2px 10px;
        border : 1px solid #d9d9d9;
        border-radius : 3px;
        padding : 3px 5px;
        background-color : #fff;
    }

    .buttons button.selected { 
        border : 1px solid #FF9559;
        background-color : #fff;
        color : #FF9559;
    }




`


const WriteSection = styled.div`

    .writeUp{
        display:flex;
        justify-content:space-between;
        margin-top : 20px;

    }
    h2{
        font-size: 18px;
    }

    .isfifty-p.selected{
        color : #FF9559;
    }
    .conditions{

    }   

    .reviewInput {
        width: 100%;
        display:flex;
        flex-direction : column;
        justify-content: center; 
        align-items: center; /* Center vertically */
        margin-top: 10px; /* Add margin for spacing */

        textarea {
            margin-top : 10px;
            min-width: 100%;
            height: 150px;

        }

        p {
            text-align : right;
            translate(0,-50%);
            color : #FF9559;
            font-size : 10px;
            margin-left : 80%;

        }
    }
`;

const ImageUploadDiv = styled.div`

    margin-top : 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);  // 3개의 칼럼
    grid-gap : 0px;
    max-width : 100%;

    .img {
        justify-self: center; /* 이미지 개별 중앙 정렬 */
    }
`;





export default function Review() {
    const [clicked, setClicked] = useState([false, false, false,false,false ])
    const [isGoodSelected, setIsGoodSelected] = useState(false);
    const [isBadSelected, setIsBadSelected] = useState(false);
    const [reviewText, setReviewText] = useState('');
    const fileInputRef = useRef(null);
    const [imagePreviews, setImagePreviews] = useState([]); // 이미지 미리보기 배열



    const handleStarClick = (index) =>{
        const newClicked = clicked.map((_,i)=>i<=index);
        setClicked(newClicked); 
    }

    const rating = clicked.filter(Boolean).length;


    const imageUploadClick = () =>{
        console.log('test하고 지우기 : 이미지업로드 버튼 클릭함')
        fileInputRef.current.click(); // 숨겨진 input 요소 클릭
    }

    // 파일 선택 후 처리하는 핸들러
    // 이미지 업로드 및 미리보기 이미지 설정 
    const handleFileChange = (event) => {
        const files = event.target.files; // 여러 파일 선택 가능
        const newPreviews = [];

        for (let i = 0; i < files.length; i++) {
            if (imagePreviews.length + newPreviews.length < 5) { // 최대 5개의 이미지만 허용
                const imageUrl = URL.createObjectURL(files[i]);
                newPreviews.push(imageUrl);
            } else {
                alert("최대 5장까지 업로드할 수 있습니다.");
                break;
            }
        }

        setImagePreviews([...imagePreviews, ...newPreviews]); // 기존 이미지와 새 이미지를 합침
    };

    const goodBtnClicked = () =>{
        setIsGoodSelected(true)
        setIsBadSelected(false)
        console.log('test 하고 지우기 | goodBtn클릭함 ')
    }

    const badBtnClicked = () =>{
        setIsGoodSelected(false)
        setIsBadSelected(true);

    }

    const handleReviewText = (event) =>{
        setReviewText(event.target.value);
    }

    return (
        <div className='review-page-wrapper' style={{display:"flex", flexDirection:"column", justifyContent :"center",alignItems:"center", margin:"0px"}}>
            <SelectPlace>
                <select>
                <option value="" selected disabled hidden> 여행지를 선택해주세요</option>
                </select>

            </SelectPlace>

            <SelectDate>
                <input type='date'/>
            </SelectDate>

            <SelectStar>
                <h4> 워래블 장소를 리뷰해보세요 ! </h4>
                <div className='stars'>
                    {clicked.map((isClicked,index)=>
                        <img
                            key={index}
                            src={isClicked ? orange : gray}
                            alt={`${index + 1} star`}
                            onClick={() => handleStarClick(index)}
                        />)}
                        <div className = 'score' style={{display : "flex"}}> 
                            <div style={{fontSize:"20px", fontWeight:"700", marginRight:"3px"}}>{rating} </div>
                            <div style={{fontSize:"17px", fontWeight:"600",marginTop:"3px", color:"#8C8D8A"}}> / 5</div>
                        </div>

                </div>
                <div className='buttons'> 
                    <button className={`button ${isGoodSelected ? 'selected' : ''}`} onClick={goodBtnClicked} >
                        <FontAwesomeIcon icon = 'thumbs-up'/>추천해요!
                    </button>
                    <button className = {`button ${isBadSelected ? 'selected' : ''}`} onClick={badBtnClicked}>
                        <FontAwesomeIcon icon = 'thumbs-down' />추천하지 않아요
                    </button>
                </div>
            </SelectStar>


            <WriteSection >
                <div className='writeUp'>

                        <h2 >후기 작성</h2>
                        <div className='conditions'>
                            <div style={{marginTop:"15px", fontSize:"13px", color:"#FF9559"}}> /1000p</div>
                            <div style={{display:"flex"}}>
                                <p className = {`isfifty-p ${reviewText.length >= 50 ? 'selected' : ''}`}style={{fontSize:"10px"}}>✓ 50자 이상 </p>
                                <p style={{fontSize:"10px", marginLeft:"10px"}}>✓ 사진</p>
                            </div>
                        </div>
                </div>


                <ImageUploadDiv>
                    <img 
                        src={AttachPhoto} 
                        alt="사진을 첨부하세요" 
                        onClick={imageUploadClick}
                        style={{cursor: "pointer"}}
                    />

                    {imagePreviews.map((preview, index) => (
                        <div key={index} style={{ position: 'relative', display: 'inline-block' }}>
                            <img
                                src={preview}
                                alt={`미리보기 ${index + 1}`}
                                style={{ width: '100px', height: '100px', objectFit: 'cover', border: '1px solid #ccc', marginRight: '5px' }}
                            />
                            <button
                                onClick={() => {
                                    const newPreviews = imagePreviews.filter((_, i) => i !== index);
                                    setImagePreviews(newPreviews);
                                }}
                                style={{
                                    border :'none',
                                    position: 'absolute',
                                    top: '0',
                                    right: '0',
                                    background: 'none',
                                    color: '#fff',
                                    cursor: 'pointer',
                                    fontSize: '16px',
                                }}
                            >
                                ✖  
                            </button>
                        </div>
                    ))}

                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        style={{ display: 'none' }} 
                        accept="image/*"  
                        multiple
                    />
                </ImageUploadDiv>


                <div className = "reviewInput">
                    <img src = {ReviewText} alt = "안내문구"/>
                    <textarea type='text' value={reviewText} onChange={handleReviewText} placeholder='리뷰를 입력하세요' />
                    <p>{reviewText.length} / 최소 20자</p>

                </div>
                

            </WriteSection>


        </div>
    )
}
