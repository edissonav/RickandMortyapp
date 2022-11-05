import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Residentinfo = ({url}) => {

const [character, setcharacter]=useState({})

useEffect(()=>{
    axios.get(url)
    .then(res=> setcharacter(res.data))
},[])
console.log(character);
    return (
        
     <div className='residentcard'>
        <div className='resident-img'><img src={character.image} alt="" /></div>
       <div className='resident-info'> <h1>{character?.name}</h1>
        
        <h2>Status: {character.status}</h2>
        <h3>Origin: {character.origin?.name}</h3>
        <h4>Number of episodes:  {character.episode?.length}</h4></div>
     </div>
        
    );
};

export default Residentinfo;