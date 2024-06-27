import { useState } from 'react'



const useClickedPlace = () =>{

    const [clickedPlace , setClickedPlace] = useState(1);

    const updateClickedPlace = (id)=>{
        setClickedPlace(id);
    }

    return {clickedPlace,updateClickedPlace};
};


export default useClickedPlace;

