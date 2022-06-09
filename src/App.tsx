import axios, { AxiosResponse } from 'axios';
import { Fragment, useEffect, useState } from 'react';
import { DEFAULT_LOCATION, ONE_CALL_ENDPOINT } from 'app.constants';
import { CurrentWeather } from 'feature/CurrentWeather';
import { OneCallResponseData } from 'types';

// Renders twice in dev mode because: https://stackoverflow.com/questions/60618844/react-hooks-useeffect-is-called-twice-even-if-an-empty-array-is-used-as-an-ar#answer-60619061
const App: React.FC = () => {
  const [lat, lon] = DEFAULT_LOCATION;
  const { REACT_APP_OPEN_WEATHER_API_KEY } = process.env;

  const [weather, setWeather] = useState<OneCallResponseData | undefined>()

  useEffect(() => {
    const fetchData = async () => {
      const { data }: AxiosResponse<OneCallResponseData> = await axios.get(`${ONE_CALL_ENDPOINT}?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=${REACT_APP_OPEN_WEATHER_API_KEY}`);
      setWeather(data);
    }

    fetchData().catch(error => console.log(error));
  }, [REACT_APP_OPEN_WEATHER_API_KEY, lat, lon])

  return (
    <div className="h-full p-4 bg-slate-100 dark:bg-gray-700">
      <h1 className="pt-4 pb-2 text-3xl font-bold tracking-tight text-center sm:text-5xl text-slate-600 dark:text-slate-300">Edozo Weather App</h1>
      {!!weather && (
        <Fragment>
          <p className="pt-4 pb-6 font-bold tracking-tight text-center text-1xl sm:text-3xl text-slate-600 dark:text-slate-300">{weather.timezone}</p>
          <CurrentWeather currentWeather={weather.current} />
        </Fragment>
      )}
    </div>
  );
}

export default App;
