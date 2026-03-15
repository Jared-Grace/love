export function playwright_by_attribute(page, name, value) {
  const inside = name + '="' + value;
  let r = page.locator("[" + inside + '"]');
  return r;
}
