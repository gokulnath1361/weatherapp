const API_KEY='b0b765bf1b26122cd916ca2d29ea7455';
const BASE_URL="https://api.openweathermap.org/data/2.5/";
const getWeatherData=(infoType,searchparams)=>{
    const url= new URL(BASE_URL + infoType );
    url.search=new URLSearchParams({...searchparams,appid:API_KEY});
    return fetch(url)
    .then((res)=>res.json())
};
const formatCurrentWeather=(data)=>{
    // console.log("formatcurrentdata",data);
    const dateObj=new Date(data.dt*1000);
    const time = dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const num = String(dateObj.getDate()).padStart(2, '0');
    const monthindex = String(dateObj.getMonth());
    const monthName=['JAN','FEB','MAR','APL','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']
    const month=monthName[monthindex];
    const year = dateObj.getFullYear();
    const date = `${num} ${month} ${year}`;
    const dayIndex = dateObj.getDay();
    const dayNames = ['Sunnday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Satturday'];
    const day = dayNames[dayIndex];
    const sunriseObj=new Date(data.sys.sunrise*1000);
    const sunrise = sunriseObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const sunsetObj=new Date(data.sys.sunset*1000);
    const sunset = sunsetObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });



    const {
        coord:{lat, lon},
        main:{temp,feels_like,temp_min,temp_max,humidity},
        name,
        dt,
        sys:{country},
        weather,
        wind:{speed}
    }=data
    const {main:details,icon}=weather[0]
    return {lat,lon,temp,feels_like,temp_min,temp_max,humidity,name,dt,country,sunrise,sunset,details,icon,speed,date,day,time};
}

const formatForecastWeather=(data)=>{
    // console.log(data);
    let {list,daily,hourly}=data;
    hourly=list.slice(1,6).map(d=>{
        const dateObj=new Date(d.dt*1000);
        const time = dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        return{
            title:(time),
            temp:d.main.temp,
            icon:d.weather[0].icon
        };
    });
    daily=list.slice(1,6).map(d=>{
        const dateObj=new Date(d.dt*1000);
        const date = dateObj.toLocaleDateString();
        const dayIndex = dateObj.getDay();
        const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const day = dayNames[dayIndex];
        return{
            date:(date),
            title:day,
            temp:d.main.temp,
            icon:d.weather[0].icon
        };
    });
    return {hourly,daily};
}

const getFormatedWeatherData= async (searchparams)=>{
    const formatedCurrentWeather = await getWeatherData('weather',searchparams)
    .then(formatCurrentWeather)
    const {lat,lon}=formatedCurrentWeather;
    const formatedForecastWeather= await getWeatherData('forecast',{lat,lon,units:searchparams.units})
    .then(formatForecastWeather)
     return {...formatedCurrentWeather,...formatedForecastWeather};
}
export default getFormatedWeatherData;


