import { test, expect } from '@playwright/test';

test('検索機能の確認', async ({ page }) => {
  await page.goto('/');
  await page.getByTestId("ListIcon").locator('..').click();
  await page.getByPlaceholder("学校名検索…").fill("おおさかたいいくだいがくなみしょう");
  await page.getByPlaceholder("学校名検索…").press('Enter');
  const listCounts = await page.locator("ul>li").count();
  expect(listCounts).toBe(1);
});
test('フィルタ機能の確認（単数）', async ({ page }) => {
  await page.goto('/');
  await page.getByTestId("ListIcon").locator('..').click();
  await page.getByTestId("FilterListIcon").locator('..').click();
  await page.getByRole('button', { name: '男女校' }).click();
  await page.getByTestId("男子校").click();
  const listCounts = await page.locator("ul>li").count();
  // await page.screenshot({ path: 'screenshot.png' });
  expect(listCounts).toBe(8);
});
test('フィルタ機能の確認（複数）', async ({ page }) => {
  await page.goto('/');
  await page.getByTestId("ListIcon").locator('..').click();
  await page.getByTestId("FilterListIcon").locator('..').click();
  await page.getByRole('button', { name: '男女校' }).click();
  await page.getByTestId("男子校").click();
  await page.getByRole('button', { name: '学科' }).click();
  await page.getByTestId("ビジネス・商業系").click();
  const listCounts = await page.locator("ul>li").count();
  // await page.screenshot({ path: 'screenshot.png' });
  expect(listCounts).toBe(1);
});