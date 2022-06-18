import React,{useState,useEffect} from 'react';

const useDebounce=(value,delay)=>{
    console.log("DEbounce log");
    const [debounceValue,setDebounceValue]= useState(value);
    useEffect(()=>{
         const handler=setTimeout(()=>{
             console.log("SettiNG value",value);
             setDebounceValue(value);
         },delay);
         return ()=>{
             console.log("Clearing Settimeout");
             clearTimeout(handler)
             console.log("CLEAred",value);
         }
    },[value,delay])
    return debounceValue
}
export default useDebounce;