import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Residentinfo from './components/Residentinfo'
import imageheader from './assets/img/headerrickandmorty.jpg'

function App() {
  const [location, setlocation]=useState({})
  const randomlocation= Math.floor(Math.random()*126)+1

  useEffect(()=>{
    axios.get(` https://rickandmortyapi.com/api/location/${randomlocation} ` )
    .then(res=> setlocation(res.data))
  },[])
  console.log(location);

  const [id, setid]=useState("")
 const changeid=()=>{
  axios.get(`https://rickandmortyapi.com/api/location/${id}`)
  .then(res=> setlocation(res.data))

  if(id> 126){
    alert("ingresa un numero menor o igual a 126")
  }else if (id<1){
    alert("ingresa un numero mayor o igual a 1")
  }
 }

  return (
    <div className="App">
      <header><img src={imageheader} alt="" /></header>

      <h1 className='wiki'>Rick and Morty Wiki</h1>

      <div className='input'>
        <input type="text" value={id} onChange={e=>setid(e.target.value)}/>
      <button onClick={changeid}>Search Id</button></div>
      
      <nav><h1>{location.name}</h1>
      <div>
      <p><b>Type of location:</b>  {location.type}</p>
      <p><b>Dimension:</b>  {location.dimension}</p>
      <p><b>ID:</b>  {location.id}</p></div></nav>
      

      
      <div className='residents'>
        <h1>RESIDENTS:</h1>
        {
        location.residents?.map(resident => ( 
        <Residentinfo url={resident} key={resident} />
        )
      )}
      </div>
     
      
    </div>
  )
}

export default App
