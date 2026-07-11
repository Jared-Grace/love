import { equal } from "../../../love/public/src/equal.mjs";
export async function playwright_by_tag_name(page, tag_name) {
  let elements = await page.locator("*").elementHandles();
  let filtered = [];
  for (let el of elements) {
    function lambda(e) {
      let r = e.tagName.toLowerCase();
      return r;
    }
    let name = await el.evaluate(lambda);
    if (equal(name, tag_name)) {
      filtered.push(el);
    }
  }
  return filtered;
}
