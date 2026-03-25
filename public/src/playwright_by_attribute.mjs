import { retry_fast } from "../../../love/public/src/retry_fast.mjs";
import { log } from "../../../love/public/src/log.mjs";
export async function playwright_by_attribute(page, name, value) {
  log(playwright_by_attribute.name, {
    name,
    value,
  });
  async function lambda2() {}
  let result = await retry_fast(lambda2);
  await page.waitForSelector(`[${name}]`);
  const elements = await page.locator(`[${name}]`).elementHandles();
  const filtered = [];
  for (const el of elements) {
    const a = await el.getAttribute(name);
    if (a === value) {
      filtered.push(el);
    }
  }
  return filtered;
}
