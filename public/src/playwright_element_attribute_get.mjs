export function playwright_element_attribute_get(element, name) {
  let r = element.getAttribute(name);
  return r;
}
