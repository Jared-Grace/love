export async function playwright_by_attribute_generic(
  page,
  name,
  value,
  compare,
) {
  const elements = await page.locator(`[${name}]`).elementHandles();
  const filtered = [];
  for (const el of elements) {
    const a = await el.getAttribute(name);
    if (compare(a, value)) {
      filtered.push(el);
    }
  }
  return filtered;
}
