// import {DateTime} from 'luxon'
const API_KEY='b0b765bf1b26122cd916ca2d29ea7455';
const BASE_URL="https://api.openweathermap.org/data/2.5/";
//using city current = https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// 3hr forecast for 5 days=api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
const getWeatherData=(infoType,searchparams)=>{
    // const getWeatherData=(infoType,searchparams,units)=>{
    const url= new URL(BASE_URL + '/' + infoType );
    // const url= `${BASE_URL}${infoType}?q=${searchparams}&appid=${API_KEY}&units=${units}`;
    url.search=new URLSearchParams({...searchparams,appid:API_KEY});
     
    return fetch(url)
    .then((res)=>res.json())
};
// const getForecastData=(infoType,lat,lon,units)=>{
//     // const url= new URL(BASE_URL + '/' + infoType );
//     // const url= `${BASE_URL}${infoType}?q=${searchparams}&appid=${API_KEY}`;
//     const url= `${BASE_URL}${infoType}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${units}`;

//     // url.search=new URLSearchParams({...searchparams,appid:API_KEY});
     
//     return fetch(url)
//     .then((res)=>res.json())
// };
// const getlatlonData=(infoType,lati,long,units)=>{
//     // const url= new URL(BASE_URL + '/' + infoType );
//     // const url= `${BASE_URL}${infoType}?q=${searchparams}&appid=${API_KEY}`;
//     const url= `${BASE_URL}${infoType}?lat=${lati}&lon=${long}&appid=${API_KEY}&units=${units}`;

//     // url.search=new URLSearchParams({...searchparams,appid:API_KEY});
     
//     return fetch(url)
//     .then((res)=>res.json())
//     // .then((data)=>console.log("latlon",data))
// };
const formatCurrentWeather=(data)=>{
    console.log("formatcurrentdata",data);
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
    // let {timezone,daily,hourly}=data;
    // daily = daily.slice(1,6).map(d=>{
    //     return{
    //         title:formatToLocalTime(d.dt,timezone,'ccc'),
    //         temp:d.temp.day,
    //         icon:d.weather[0].icon
    //     };
    // });

    // hourly = hourly.slice(1,6).map(d=>{
    //     return{
    //         title:formatToLocalTime(d.dt,timezone,'hh:mm a'),
    //         temp:d.temp.day,
    //         icon:d.weather[0].icon
    //     };
    // });

    // return {timezone,daily,hourly}


}

// const formatCurrentlatlonWeather=(data)=>{
//     console.log("formatlatlon",data)
//     const dateObj=new Date(data.dt*1000);
//     const time = dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     const num = String(dateObj.getDate()).padStart(2, '0');
//     const monthindex = String(dateObj.getMonth());
//     const monthName=['JAN','FEB','MAR','APL','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']
//     const month=monthName[monthindex];
//     const year = dateObj.getFullYear();
//     const date = `${num} ${month} ${year}`;
//     const dayIndex = dateObj.getDay();
//     const dayNames = ['Sunnday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Satturday'];
//     const day = dayNames[dayIndex];
//     const sunriseObj=new Date(data.sys.sunrise*1000);
//     const sunrise = sunriseObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     const sunsetObj=new Date(data.sys.sunset*1000);
//     const sunset = sunsetObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     const {
//         coord:{lat, lon},
//         main:{temp,feels_like,temp_min,temp_max,humidity},
//         name,
//         dt,
//         sys:{country},
//         weather,
//         wind:{speed}
//     }=data
//     const {main:details,icon}=weather[0]
//     return {lat,lon,temp,feels_like,temp_min,temp_max,humidity,name,dt,country,sunrise,sunset,details,icon,speed,date,day,time};
//     // return data;

// }

const getFormatedWeatherData= async (searchparams)=>{
// const getFormatedWeatherData= async (query,units,lati,long)=>{
    // console.log(lati,long);
    const formatedCurrentWeather = await getWeatherData('weather',searchparams)
    .then(formatCurrentWeather)
    // let formatedCurrentWeather
    // if(!query && lati && long) {
    //     formatedCurrentWeather=null
    // }
    // else{
    //     formatedCurrentWeather = await getWeatherData('weather',query,units)
    // .then(formatCurrentWeather)
    // }
    const {lat,lon}=formatedCurrentWeather;

    // let formatedlatlonWeather;
    // if (!lati && !long && query) {
    //     formatedlatlonWeather = null; // or any default value you want to assign
    // } else if(lati && long && query) {
    //     formatedlatlonWeather = await getlatlonData('weather', lati, long, units)
    //         .then(formatCurrentlatlonWeather);
    // }
    // else{
    //     formatedlatlonWeather = null;
    // }

    
    // console.log("formatedlatlonWeather",formatedlatlonWeather)
    // forone call api = const formatedForecastWeather= await getWeatherData('onecall',{lat,lon,exclude:'current,minutely,alerts',units:searchparams.units,})
    // .then(formatForecastWeather)
    const formatedForecastWeather= await getWeatherData('forecast',{lat,lon,units:searchparams.units})
 // const formatedForecastWeather= await getForecastData('forecast',lat,lon,units)
    .then(formatForecastWeather)
     return {...formatedCurrentWeather,...formatedForecastWeather};
    // return Object.assign({}, formatedCurrentWeather, formatedForecastWeather);

    //return formatedForecastWeather;
}
// const formatToLocalTime=(secs,zone,format ="cccc, dd LLL yyyy'|local time:'hh:mm a")=>DateTime.fromSeconds(secs).setZone(zone).toFormat(format);
// const iconUrlFromCode = (code) =>`http://openweathermap.org/img/wn/${code}@2x.png`;
export default getFormatedWeatherData;
// export {iconUrlFromCode};


