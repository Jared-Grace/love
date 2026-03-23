import { html_attribute_get_unwrapped } from "../../../love/public/src/html_attribute_get_unwrapped.mjs";
export function html_attribute_get_unwrapped_curried_right(key) {
  return function html_attribute_get_unwrapped_curried_right_result(element) {
    return html_attribute_get_unwrapped(element, key);
  };
}
