import { render, screen } from '@testing-library/react';
import { CurrentWeather } from './CurrentWeather';

const mockWeatherData = {
  temp: 12,
  dt: 1597354800,
  weather: [
    {
      id: 800,
      main: 'Clear',
      description: 'clear sky',
      icon: '01d',
    },
  ],

};

it('renders all relevant current in weather information', () => {
  render(<CurrentWeather currentWeather={mockWeatherData} />);

  expect(screen.getByText("13/08/2020")).toBeInTheDocument();
  expect(screen.getByText("22:40:00")).toBeInTheDocument();
  expect(screen.getByText("clear sky")).toBeInTheDocument();
});

