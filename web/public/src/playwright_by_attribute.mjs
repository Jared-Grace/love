import { log } from "../../../love/public/src/log.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
export async function playwright_by_attribute(page, name, value) {
  const elements = await page.locator(`[${name}]`).elementHandles();
  const filtered = [];
  for (const el of elements) {
    const a = await el.getAttribute(name);
    log(playwright_by_attribute.name, {
      name,
      value,
      a,
    });
    if (a === value) {
      filtered.push(el);
    }
  }
  let only = list_single(filtered);
  return only;
}
