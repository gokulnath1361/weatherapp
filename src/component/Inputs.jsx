import React, { useState } from 'react'
import './Input.css'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'


function Inputs({setQuery,units,setUnits}) {
     const[city,setCity]=useState('');
     const handleSearchClick=()=>{
      if(city !== ''){
        setQuery({q:city})
        setCity('');
      }
     }
     const handleLocationClick =()=>{
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
          let lat=position.coords.latitude;
          let lon=position.coords.longitude;  
          setQuery({lat,lon})
        })
      }
     }
       
    const handleUnitsChange = (e)=>{
      const selectedunit=e.target.name;
      if(units!== selectedunit){
        setUnits(selectedunit);
      }
    }

  return (
    <div className='input'>
      <div className='inputdiv'>
        <input type="text" 
        placeholder='Search for city....' 
        value={city}
        onChange={(e)=>setCity(e.target.value)}
        className='inputfield'/>
        <UilSearch size={25}
        onClick={handleSearchClick}
        className="search"/>
        <UilLocationPoint size={25}
        onClick={handleLocationClick}
         className="location"/>
      </div>
      <div className='units'>
        <button name='metric' 
        onClick={handleUnitsChange} className='celcius'>°C</button>
        <p className='text-xl text-white mx-1'>|</p>
        <button name='imperial'
        onClick={handleUnitsChange} 
         className='celcius'>F</button>
      </div>
    </div>
  )
}

export default Inputs
