import React from 'react'
import './TopButton.css'

function TopButton({setQuery}) {
    const  cities = [
        {
            id:1,  
            title:'Delhi' 
        },
        {
            id:2,  
            title:'Mumbai' 
        },
        {
            id:3,  
            title:'Chennai' 
        },
        {
            id:4,  
            title:'Bengaluru' 
        },
        {
            id:5,  
            title:'Vellore' 
        }
    ]
  return (
    <div className='top'>
      {cities.map((city)=>(
         <button key={city.id} className='topbutton' onClick={()=>setQuery({q:city.title})}>{city.title}</button>
      ))}
    </div>
  )
}

export default TopButton
