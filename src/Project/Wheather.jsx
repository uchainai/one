import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Wheather = () => {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const apiKey = "27bddea6f70d011d77628dab714a7ade";

    const getWeather = async () => {
        if (!city) return;

        setLoading(true);
        setError(null);
        setWeatherData(null);

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.cod === "404") {
                setError("Invalid city name. Please try again.");

            } else {
                setWeatherData(data);
            }
        } catch (error) {
            setError("Error fetching weather data.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-teal-500 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-md shadow-black max-w-sm w-full">
                <h2 className="text-2xl font-semibold mb-4 text-center">Weather App</h2>
                <div className="flex justify-around m-1 gap-4">
                
                        <input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            placeholder="Enter city name"
                        />
                        <button
                        onClick={getWeather}
                        className="bg-green-400 w-10 h-10 text-white hover:text-black rounded-full flex items-center cursor-pointer justify-center text-center "
                    >
                        <FaSearch className="text-center"/>
                    </button>
                    </div>

                    
             


                {error && (
                    <div className="mt-4 text-red-600 text-center">{error}</div>
                )}

                {loading && <div className="mt-4 text-center">Loading...</div>}

                {weatherData && !loading && (
                    <div  className="   mt-6 text-center   flex-col ">
                        <h3 className="text-xl font-semibold">{weatherData.name}</h3>
                       <div className="flex justify-center">
                       <img
                                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                                alt="weather icon"
                                className="w-28 h-28"
                            />
                       </div>
                        <div className="flex justify-center items-center mt-2">
                           
                            <div className="ml-4 flex">
                                <p className="text-lg">Temperature: {Math.round(weatherData.main.temp)}°C</p>
                                <p className="text-lg">Wind Speed: {weatherData.wind.speed} km/h</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Wheather;
