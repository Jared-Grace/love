export function playwright_by_attribute(page, name, value) {
  let r = page.locator("[" + name + '="' + value + '"]');
  return r;
}
