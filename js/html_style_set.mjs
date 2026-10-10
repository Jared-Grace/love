import { property_name_internal_not_assert } from "./property_name_internal_not_assert.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
export function html_style_set(b, style_key, style_value) {
  property_name_internal_not_assert(style_key);
  let b_element = html_component_element_get(b);
  b_element.style[style_key] = style_value;
}
