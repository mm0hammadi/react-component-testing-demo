import { test, expect } from '@playwright/experimental-ct-react';
import { CityComponent } from '../modules/CityComponent';

const cityLocator = '[placeholder="City"]'
const searchButtonLocator = '[type="submit"]'

const cityName = 'Hanoi'

test('cityField accepts text input', async ({ mount }) => {
    const cityComponent = await mount(<CityComponent /> );
    const cityField = cityComponent.locator(cityLocator)
    
    await cityField.fill(cityName)

    await expect(cityField).toHaveValue(cityName)
});

test('Click on `Search` button executes fetchWeather prop', async ({ mount }) => {
    let isCalled = false
    const cityComponent = await mount(
        <CityComponent
        fetchWeather={() => isCalled = true}
        />
    );

    await cityComponent.locator(cityLocator).fill(cityName)
    await cityComponent.locator(searchButtonLocator).click()

    expect(isCalled).toBeTruthy()
});

