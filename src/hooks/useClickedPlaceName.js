import { useState } from 'react'



const useClickedPlaceName = () =>{

    const [clickedName , setClickedName] = useState('');

    const updateClickedName = (name)=>{
        setClickedName(name);
    }
    return {clickedName,updateClickedName};
};


export default useClickedPlaceName;

