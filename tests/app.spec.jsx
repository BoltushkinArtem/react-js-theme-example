import { test, expect } from '@playwright/experimental-ct-react';
import TestApp from './TestApp';

test('change theme from default to one', async ({ mount }) => {
  const DEFAULT_THEME_BACKGROUND_COLOR = "#ff0000"
  const ONE_THEME_BACKGROUND_COLOR = "#00ff40"

  const component = await mount(<TestApp />);

  await expect(await component.evaluate(element =>
    window.getComputedStyle(element).getPropertyValue('--background-color')
  )).toEqual(DEFAULT_THEME_BACKGROUND_COLOR)
  
  await component.getByTestId('button-OneTheme').click()

  await expect(await component.evaluate(element =>
    window.getComputedStyle(element).getPropertyValue('--background-color')
  )).toEqual(ONE_THEME_BACKGROUND_COLOR)
});

test('change theme from default to one and return', async ({ mount }) => {
  const DEFAULT_THEME_BACKGROUND_COLOR = "#ff0000"
  const ONE_THEME_BACKGROUND_COLOR = "#00ff40"

  const component = await mount(<TestApp />);

  await expect(await component.evaluate(element =>
    window.getComputedStyle(element).getPropertyValue('--background-color')
  )).toEqual(DEFAULT_THEME_BACKGROUND_COLOR)

  await component.getByTestId('button-OneTheme').click()

  await expect(await component.evaluate(element =>
    window.getComputedStyle(element).getPropertyValue('--background-color')
  )).toEqual(ONE_THEME_BACKGROUND_COLOR)

  await component.getByTestId('button-DefaultTheme').click()

  await expect(await component.evaluate(element =>
    window.getComputedStyle(element).getPropertyValue('--background-color')
  )).toEqual(DEFAULT_THEME_BACKGROUND_COLOR)
});