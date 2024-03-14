import './App.css';
import TopButton from './component/TopButton';
import Inputs from './component/Inputs';
import TimeAndLocation from './component/TimeAndLocation';
import TemperatureAndDetails from './component/TemperatureAndDetails';
import ForeCast from './component/ForeCast';
import getFormatedWeatherData from './services/WeatherService';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [query, setQuery] = useState({ q: 'vellore' });
  // console.log("query"+query)
  // const [query, setQuery] = useState( 'vellore' );
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);
  // const [lati,setlat]=useState('');
  // const [long,setlon]=useState('');
  // console.log(lati,long);

  console.log("weather",weather);
  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q?query.q:'current location';
      toast.info('fetching weather for '+message);
      await getFormatedWeatherData({ ...query, units })
      // await getFormatedWeatherData(query,units,lati,long)
      .then((data) => { 
         // console.log(data)
        toast.success(`sucessfully fetched weather for ${data.name},${data.country}`)
        setWeather(data)
       })
    }
    fetchWeather();
  }, [query, units])
      
  // const formatBackground =()=>{
  //   if(!weather){
  //     return "from-cyan-700 to-blue-700"
  //   }
  //   const threshold =units === 'metric'?20:60;
  //   if(weather.temp<=threshold){
  //     return "from-cyan-700 to-blue-700"
  //   }
  //   else{
  //     return "from-yellow-700 to-orange-700";
  //   }
  // }
  // const handlecity=()=>{
  //   setQuery('')
  // }
  const threshold =units === 'metric'?20:60;
  return (
    <div className={`${weather && weather.temp>=threshold?"container bgcolor":"container"}`}>
      <TopButton setQuery={setQuery} />
      <Inputs   setQuery={setQuery} units={units} setUnits={setUnits}/>

      {weather && (
        <div>
          <TimeAndLocation weather={weather}/>
          <TemperatureAndDetails weather={weather} />
          <ForeCast title="hourly forecast" items={weather.hourly} />
          <ForeCast title="daily forecast" items={weather.daily} />
          </div>
      )}

      <ToastContainer autoClose={5000} theme='colored' newestOnTop={true} />


        </div>
      );
}

      export default App;
