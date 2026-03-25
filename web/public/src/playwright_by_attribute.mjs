import { log } from "../../../love/public/src/log.mjs";
export async function playwright_by_attribute(page, name, value) {
  log(playwright_by_attribute.name, {
    name,
    value,
  });
  const elements = await page.waitForSelector(`[${name}]`).elementHandles();
  const filtered = [];
  for (const el of elements) {
    const a = await el.getAttribute(name);
    if (a === value) {
      filtered.push(el);
    }
  }
  return filtered;
}
