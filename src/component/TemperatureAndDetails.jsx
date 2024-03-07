import React from 'react'
import{ UilArrowUp, UilTemperature ,UilTear, UilWind, UilSun, UilSunset, UilArrowDown} from '@iconscout/react-unicons'

function TemperatureAndDetails({weather:{details,icon,temp,feels_like,humidity,speed,sunrise,sunset,temp_min,temp_max}}) {
  return (
    <div>
      <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
        {details}
      </div>
      <div className='flex flex-row items-center justify-between text-white py-3'>
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt='' className='w-20'/>
        <p className='text-5xl'>{Math.round(temp)}°</p>
        <div className='flex flex-col space-y-2'>
            <div className='flex font-light text-sm items-center justify-center'>
                <UilTemperature size={18} className='mr-1'/>
                Real Fells :
                <span className='font-medium ml-1'>{Math.round(feels_like)}°</span>
            </div>
            <div className='flex font-light text-sm items-center justify-center'>
                <UilTear size={18} className='mr-1'/>
                Humidity :
                <span className='font-medium ml-1'>{Math.round(humidity)}%</span>
            </div>
            <div className='flex font-light text-sm items-center justify-center'>
                <UilWind size={18} className='mr-1'/>
                Wind :
                <span className='font-medium ml-1'>{Math.round(speed)} kmph</span>
            </div>
        </div>
      </div>
        <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
            <UilSun/>
            <p className='font-light '>
                Rise :<span className='font-medium ml-1'>{sunrise} Am</span>
                </p>
            <p className='font-light'>|</p>
            <UilSunset/>
            <p className='font-light '>
                Set :<span className='font-medium ml-1'>{sunset} Pm</span>
                </p>
            <p className='font-light'>|</p>
            <UilArrowUp/>
            <p className='font-light '>
                High :<span className='font-medium ml-1'>{Math.round(temp_max)}°C</span>
                </p>
            <p className='font-light'>|</p>
            <UilArrowDown/>
            <p className='font-light '>
                Low :<span className='font-medium ml-1'>{Math.round(temp_min)}°C</span>
                </p>
        </div>
    </div>
  )
}

export default TemperatureAndDetails
