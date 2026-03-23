import { playwright_element_attribute_get } from "../../../love/public/src/playwright_element_attribute_get.mjs";
export function playwright_element_attribute_equals(element, name, value) {
  let actual = playwright_element_attribute_get(element, name);
  let r3 = actual === value;
  return r3;
}
