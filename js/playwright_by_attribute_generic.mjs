import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function playwright_by_attribute_generic(
  page,
  name,
  value,
  compare,
) {
  let elements = await page
    .locator(text_combine_multiple(["[", name, "]"]))
    .elementHandles();
  let filtered = [];
  for (let el of elements) {
    let a = await el.getAttribute(name);
    if (compare(a, value)) {
      filtered.push(el);
    }
  }
  return filtered;
}
