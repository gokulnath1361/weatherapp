import React from 'react'

function TimeAndLocation({weather:{dt,timezone,name,country,day,date,time}}) {
  return (
    <div>
      <div className='flex items-center justify-center my-6'>
        <p className='text-white text-xl font-extralight'>
          {/* Tuesday, 31 May 2022 | Local time 12:46 PM */}
          {`${day}, ${date} | Local time: ${time}`}
        </p>
        </div>
         <div className='flex items-center justify-center my-3'>
            <p className='text-white text-3xl font-medium'>
                {/* {`${weather.name},${weather.country}`} */}
                {`${name},${country}`}
            </p>
         </div>
    </div>
  )
}

export default TimeAndLocation
