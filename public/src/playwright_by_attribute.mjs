import { list_single } from "../../../love/public/src/list_single.mjs";
export async function playwright_by_attribute(page, name, value) {
  const elements = await page
    .locator("*")
    .filter({
      has: page.locator(`[${name}]`),
    })
    .elementHandles();
  const filtered = [];
  for (const el of elements) {
    if ((await el.getAttribute(name)) === value) {
      filtered.push(el);
    }
  }
  let only = list_single(list);
  return filtered;
}
