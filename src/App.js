import React,{useState,useEffect} from 'react';
import './App.css';
import useDebounce from './useDebounce';

function App() {
 
  const [searchTerm,setSearchTerm]=useState('');
  const [data,setData]=useState([])
  const debounceSearchTerm= useDebounce(searchTerm,2000);
console.log("RERENDER");
 useEffect(()=>{
  if(debounceSearchTerm){
    console.log('Search term',debounceSearchTerm);
    fetchPokemon(debounceSearchTerm);
  }else{
   console.log('Something else')
  }
 },[debounceSearchTerm])

const fetchPokemon=async (pokemon)=>{
//   fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
//   .then((res)=>res.json())
//   .then((data)=>{
//     console.log('DATA',data);
//  setData(data)
//   })

let response= await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`,{
  method:"GET"
})
console.log('RES',response);
let data= await response.json();
console.log('RESData',data);
setData(data)
}
  return (
  <div className='App'>
 <input
//  value={searchTerm}
 onChange={e => setSearchTerm(e.target.value)}
 placeholder='Search pokemon...'
 />
 {data.length!=0 ? (
 <div>
     <h1> {data.name}</h1>

  <h1> {data.moves[0].move.name}</h1>
  <h1> {data.abilities[0].ability.name}</h1>

 </div>) : <h1>No Data</h1>}
 </div>
  );
  
}
export default App;
