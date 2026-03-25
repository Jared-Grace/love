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
  return filtered;
}
