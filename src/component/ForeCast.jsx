import React from 'react'
import './ForeCast.css'

function ForeCast({title,items}) {
  return (
    <div>
    <div className='forecastcontainer'>
      <p className='forecasttitle'>{title}</p>
    </div>
    <hr className='horizondal'/>
    <div className='forecastdata'>
      {items.map((item,index)=>(
              <div className='forecast' key={index}>
              <p className='datatime'>{item.title}</p>
              <img className='dataimg' src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`} alt=''/>
              <p className='datatemperature'>{Math.round(item.temp)}°</p>
          </div>
      ))}
       
    </div>
    </div> 
  )
}

export default ForeCast
