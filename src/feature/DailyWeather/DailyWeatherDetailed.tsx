import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DailyWeatherData } from "types";

export interface DailyWeatherDetailedProps {
  dailyWeatherDetailed: DailyWeatherData[];
}

export const DailyWeatherDetailed: React.FC<DailyWeatherDetailedProps> = ({
  dailyWeatherDetailed,
}) => {
  const { dt } = useParams();
  const [data, setData] = useState<undefined | DailyWeatherData>();

  useEffect(() => {
    const weatherToday = dailyWeatherDetailed.find((obj) => {
      if (dt) {
        return obj.dt === parseInt(dt);
      }
    });
    setData(weatherToday);
  }, []);

  return (
    <>
      {data ? (
        <div>{JSON.stringify(data, null, 2)}</div>
      ) : (
        <div>
          <h2>Sorry, something went wrong fetching the data</h2>
        </div>
      )}
    </>
  );
};
