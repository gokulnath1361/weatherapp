import React from 'react'
import './TemperatureAndDetails.css'
import{ UilArrowUp, UilTemperature ,UilTear, UilWind, UilSun, UilSunset, UilArrowDown} from '@iconscout/react-unicons'

function TemperatureAndDetails({weather:{details,icon,temp,feels_like,humidity,speed,sunrise,sunset,temp_min,temp_max}}) {
  return (
    <div>
      <div className='temperaturedetails'>
        {details}
      </div>
      <div className='tempimg'>
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt='' className='w-20'/>
        <p className='temp'>{Math.round(temp)}°</p>
        <div className='details'>
            <div className='tempdetail'>
                <UilTemperature size={18} className='mr-1'/>
                Real Fells :
                <span className='temptext'>{Math.round(feels_like)}°</span>
            </div>
            <div className='tempdetail'>
                <UilTear size={18} className='mr-1'/>
                Humidity :
                <span className='temptext'>{Math.round(humidity)}%</span>
            </div>
            <div className='tempdetail'>
                <UilWind size={18} className='mr-1'/>
                Wind :
                <span className='temptext'>{Math.round(speed)} kmph</span>
            </div>
        </div>
      </div>
        <div className='otherdetails'>
            <UilSun/>
            <p className='fontlight '>
                Rise :<span className='othertemptext'>{sunrise}</span>
                </p>
            <p className='fontlight'>|</p>
            <UilSunset/>
            <p className='fontlight '>
                Set :<span className='othertemptext'>{sunset}</span>
                </p>
            <p className='fontlight'>|</p>
            <UilArrowUp/>
            <p className='fontlight '>
                High :<span className='othertemptext'>{Math.round(temp_max)}°C</span>
                </p>
            <p className='fontlight'>|</p>
            <UilArrowDown/>
            <p className='fontlight '>
                Low :<span className='othertemptext'>{Math.round(temp_min)}°C</span>
                </p>
        </div>
    </div>
  )
}

export default TemperatureAndDetails
