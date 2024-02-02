import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('first accessibility test', () => {
    test('test homepage', async ({ page }) => {
      
      await page.goto('https://staging.christies.com/');
  
      const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
      //console.log(accessibilityScanResults);
  
      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });