import { Fragment } from "react";
import SVG from "react-inlinesvg";
import { DailyWeatherData } from "types";
import { getDate } from "utils/getDate";
import { Link } from "react-router-dom";
import { formatNumber } from "utils/formatNumber";

export interface DailyWeatherProps {
  dailyWeather: DailyWeatherData[];
}

export const DailyWeather: React.FC<DailyWeatherProps> = ({ dailyWeather }) => {
  const sevenDays = dailyWeather.slice(0, 7);

  return (
    <Fragment>
      {sevenDays.map((dailyWeather: DailyWeatherData) => {
        const { dt, temp, weather } = dailyWeather;
        const maxTemp = formatNumber(temp.max, 0);
        return (
          <div
            key={dailyWeather.dt}
            className="max-w-2xl p-6 mx-auto border border-gray-200 rounded-lg shadow-md bg-slate-50 dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="flex flex-wrap mb-4">
              <div className="w-full sm:w-1/2">
                <p className="font-normal text-center text-gray-700 sm:text-left dark:text-gray-400">
                  <Link to={`${dailyWeather.dt}`}>{getDate(dt)}</Link>
                </p>
              </div>
            </div>
            <h2 className="mb-2 text-4xl font-bold tracking-tight text-center sm:text-7xl text-slate-600 dark:text-slate-300">
              {maxTemp}&#8451;
            </h2>
            <p className="mb-2 font-normal text-center text-gray-700 dark:text-gray-400">
              {weather[0].description}
            </p>
            <div className="p-6 m-6 border border-gray-200 rounded-lg dark:border-gray-700">
              <SVG
                src={`./assets/icons/${weather[0].icon}.svg`}
                title={`${weather[0].description} icon`}
                description={weather[0].description}
                loader={
                  <p className="text-center text-gray-700 dark:text-gray-400">
                    loading icon...
                  </p>
                }
                width="auto"
                height="auto"
                className="max-w-xs mx-auto fill-slate-600 dark:fill-slate-300"
              />
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};
