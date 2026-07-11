import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export async function playwright_by_attribute_generic(
  page,
  name,
  value,
  compare,
) {
  const elements = await page
    .locator(text_combine_multiple(["[", name, "]"]))
    .elementHandles();
  const filtered = [];
  for (const el of elements) {
    const a = await el.getAttribute(name);
    if (compare(a, value)) {
      filtered.push(el);
    }
  }
  return filtered;
}
