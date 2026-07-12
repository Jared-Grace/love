import { http_sleep } from "./http_sleep.mjs";
export async function playwright_sleep_goto(page, url_goto) {
  await http_sleep();
  await page.goto(url_goto);
  await page.waitForLoadState("domcontentloaded");
}
