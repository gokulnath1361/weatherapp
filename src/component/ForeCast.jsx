import React from 'react'

function ForeCast({title,items}) {
  return (
    <div>
    <div className='flex items-center justify-start mt-6'>
      <p className='text-white font-medium uppercase'>{title}</p>
    </div>
    <hr className='my-2'/>
    <div className='flex flex-row justify-between text-white'>
      {items.map((item,index)=>(
              <div className='flex flex-col items-center justify-center' key={index}>
              <p className='font-light text-sm'>{item.title}</p>
              <img className='w-12 my-1' src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`} alt=''/>
              <p className='font-medium'>{Math.round(item.temp)}°</p>
          </div>
      ))}
       
    </div>
    </div> 
  )
}

export default ForeCast
