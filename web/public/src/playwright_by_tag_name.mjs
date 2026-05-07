import { equal } from "../../../love/public/src/equal.mjs";
export async function playwright_by_tag_name(page, value) {
  const elements = await page.locator("*").elementHandles();
  const filtered = [];
  for (const el of elements) {
    function lambda(e) {
      let r = e.tagName.toLowerCase();
      return r;
    }
    const name = await el.evaluate(lambda);
    if (equal(name, value)) {
      filtered.push(el);
    }
  }
  return filtered;
}
