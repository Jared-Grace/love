export function playwright_by_attribute(page, name, value) {
  const inside = name + '="' + value + '"';
  let r = playwright_by_attribute_exists(page, inside);
  return r;
}
function playwright_by_attribute_exists(page, inside) {
  return page.locator("[" + inside + "]");
}

