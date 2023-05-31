import { test, expect } from '@playwright/experimental-ct-react';
import { WeatherComponent } from '../modules/WeatherInfoComponent';


test('WeatherInfo accepts name and value', async ({ mount }) => {
    const weatherInfo = {
      coord: { lon: 105.8412, lat: 21.0245 },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
      ],
      base: "stations",
      main: {
        temp: 302.15,
        feels_like: 301.35,
        temp_min: 302.15,
        temp_max: 302.15,
        pressure: 1003,
        humidity: 35,
        sea_level: 1003,
        grnd_level: 1002,
      },
      visibility: 10000,
      wind: { speed: 2.71, deg: 73, gust: 3.29 },
      clouds: { all: 0 },
      dt: 1673694125,
      sys: {
        type: 1,
        id: 9308,
        country: "VN",
        sunrise: 1673652961,
        sunset: 1673692464,
      },
      timezone: 25200,
      id: 1581130,
      name: "Hanoi",
      cod: 200,
    };
    const weatherComponent = await mount(<WeatherComponent
    weather={(weatherInfo)}
    /> );
    await expect(weatherComponent).toContainText('Hanoi')
});
