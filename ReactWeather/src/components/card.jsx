import {useState, useEffect} from 'react'
import axios from 'axios'
import Button from './button';
import {MapPin, ThermometerSun, Info, FaceSlightlySmiling, ZodiacAquarius, WindArrowDown } from "lucide-react"

export default function WeatherCard(){
const [data, setData] = useState(null);
const [loading, setLoading] =useState(true);
const [error, setError] = useState(null);


const [city, setCity] = useState("Dhaka")
const weather_API =  import.meta.env.VITE_OPEN_WEATHER



    const fetchWeather = async(cityName)=> {
        try {
            setLoading(true)
            setError(null)
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${weather_API}&units=metric`)
            console.log(response);
            setData(response.data)
            setLoading(false)

            // setTimeout(() => {
            //     setData(response.data);
            //     setLoading(false);
            // }, 5000);
        } catch (error) {
            setError("Weather Fetching Faild!!")
            setLoading(false)
        }
    };


    useEffect(()=>{
    fetchWeather(city);
    }, [city]);


function changeLocation(cityName){
    setCity(cityName)
}

if(loading) return <div className='m-auto w-[80%] h-screen p-4 align-center'>
        <span className="loading loading-ball loading-xl text-yellow-600">L</span>
        <span className="loading loading-ball loading-xl text-orange-600">O</span>
        <span className="loading loading-ball loading-lg text-gray-600">A</span>
        <span className="loading loading-ball loading-lg text-blue-600" >D</span>
        <span className="loading loading-ball loading-md text-amber-600">I</span>
        <span className="loading loading-ball loading-md text-green-600">N</span>
        <span className="loading loading-ball loading-sm text-black">G</span>
        </div>

if(error) return <div className="p-5 text-red-500 text-center">{error}</div>
    return(
       <div className="flex flex-col md:flex-row gap-5 p-5">
      {/* মূল ওয়েদার কার্ড */}
      <div className="card card-dash bg-base-100 w-96 shadow-xl border">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold flex items-center gap-2">
            <MapPin />
            {data?.name}, {data?.sys?.country}
          </h2>

          <div className="my-3">
            <p className="text-4xl font-extrabold flex items-center gap-2">
              <ThermometerSun />{Math.round(data?.main?.temp)}°C
            </p>
            <p className="capitalize text-gray-500 font-medium mt-1 flex items-center gap-2">
              <Info />
              {data?.weather[0]?.description}
            </p>
          </div>

          <div className="text-sm text-gray-600 space-y-1">
            <p className="flex items-center gap-2"><FaceSlightlySmiling />Feels like: {Math.round(data?.main?.feels_like)}°C</p>
            <p className="flex items-center gap-2"><ZodiacAquarius />Humidity: {data?.main?.humidity}%</p>
            <p className="flex items-center gap-2"><WindArrowDown />Wind Speed: {data?.wind?.speed} m/s</p>
          </div>

          <div className="card-actions justify-end mt-4">
            <button
              onClick={() => fetchWeather(city)}
              className="btn btn-primary btn-sm"
            >
              Refresh
            </button>
          </div>
        </div>
      </div>

      {/* সিটি সিলেক্ট করার এরিয়া */}
      <div className="card card-dash bg-base-100 w-auto shadow-xl border p-4">
        <h3 className="font-bold text-lg mb-2">Select Division:</h3>
        
        <div className='flex flex-wrap gap-2 p-2 border-2 rounded-xl'>
          {["Dhaka","Barisal", "Chittagong", "Khulna", "Mymensingh", "Rajshahi", "Rangpur", "Sylhet"].map((cityName) => (
            <Button 
              key={cityName} 
              title={cityName} 
              eventClick={() => changeLocation(cityName)}
            />
          ))}
        </div>
      </div>
    </div>
    )
}