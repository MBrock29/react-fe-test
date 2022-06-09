import SVG from 'react-inlinesvg';
import { CurrentWeatherData } from 'types';

export interface CurrentWeatherProps {
  currentWeather: CurrentWeatherData;
}

export const CurrentWeather: React.FC<CurrentWeatherProps> = ({ currentWeather }) => {
  const { temp, dt, weather: [condition] } = currentWeather;
  const { icon, description } = condition;

  const currentTime = new Date(dt * 1000).toLocaleTimeString([]);
  const currentDate = new Date(dt * 1000).toLocaleDateString();

  return (
    <div className="max-w-2xl p-6 mx-auto border border-gray-200 rounded-lg shadow-md bg-slate-50 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-wrap mb-4">
        <div className="w-full sm:w-1/2">
          <p className="font-normal text-center text-gray-700 sm:text-left dark:text-gray-400">{currentDate}</p>
        </div>
        <div className="w-full sm:w-1/2">
          <p className="font-normal text-center text-gray-700 sm:text-right dark:text-gray-400">{currentTime}</p>
        </div>
      </div>
      <h2 className="mb-2 text-4xl font-bold tracking-tight text-center sm:text-7xl text-slate-600 dark:text-slate-300">{temp}&#8451;</h2>
        <p className="mb-2 font-normal text-center text-gray-700 dark:text-gray-400">{description}</p>
      <div className="p-6 m-6 border border-gray-200 rounded-lg dark:border-gray-700">
        <SVG 
          src={`./assets/icons/${icon}.svg`}
          title={`${description} icon`}
          description={description} 
          loader={<p className='text-center text-gray-700 dark:text-gray-400'>loading icon...</p>}
          width="auto" 
          height="auto" 
          className='max-w-xs mx-auto fill-slate-600 dark:fill-slate-300'
        />
      </div>
    </div>
  )
}
