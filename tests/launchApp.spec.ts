import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://127.0.0.1:4000/timer');
})

test.describe('Launch App', () => {
    test('should display the correct page title', async ({ page }) => {
        
        await expect(await page.getByText('Drawer')).toBeVisible();
        await expect(await page.getByRole('link', { name: 'Timer'})).toBeVisible();
        await expect(await page.getByRole('heading', { name: 'Timer'})).toBeVisible();
        await expect(await page.getByRole('link', { name: 'Stats'})).toBeVisible();
        await expect(await page.getByRole('link', { name: 'Settings'})).toBeVisible();
        await expect(await page.getByText('Light Mode')).toBeVisible();
    });
    test('should display the correct page Stats title', async ({ page }) => {
        await expect(await page.getByText('Drawer')).toBeVisible();
        await expect(await page.getByRole('link', { name: 'Stats'})).toBeVisible();
        await expect(await page.getByRole('heading', { name: 'Stats'})).not.toBeVisible();
        await page.getByRole("link", { name: 'Stats'}).click();
        await expect(await page.getByRole('heading', { name: 'Stats'})).toBeVisible();
    });
    test('should display the correct page Settings title', async ({ page }) => {
        await expect(await page.getByText('Drawer')).toBeVisible();
        await expect(await page.getByRole('link', { name: 'Settings'})).toBeVisible();
        await expect(await page.getByRole('heading', { name: 'Settings'})).not.toBeVisible();
        await page.getByRole("link", { name: 'Settings'}).click();
        await expect(await page.getByRole('heading', { name: 'Settings'})).toBeVisible();
    });
    test('should display the correct Dark Mode ', async ({ page }) => {
        await expect(await page.getByText('Drawer')).toBeVisible();
        await expect(await page.getByText('Light Mode')).toBeVisible();
        await expect(await page.getByText('Dark Mode')).not.toBeVisible();
        await page.getByText('Light Mode').click();
        await expect(await page.getByText('Dark Mode')).toBeVisible();
    });
});