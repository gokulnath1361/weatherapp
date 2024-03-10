import React from 'react'
import './TimeAndLocation.css'

function TimeAndLocation({weather:{dt,timezone,name,country,day,date,time}}) {
  return (
    <div>
      <div className='timecontainer'>
        <p className='time'>
          {`${day}, ${date} | Local time: ${time}`}
        </p>
        </div>
         <div className='placecontainer'>
            <p className='place'>
                {`${name},${country}`}
            </p>
         </div>
    </div>
  )
}

export default TimeAndLocation
