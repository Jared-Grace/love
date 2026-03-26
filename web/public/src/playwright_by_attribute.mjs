export async function playwright_by_attribute(page, name, value) {
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
