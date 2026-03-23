import { html_attribute_get_unwrapped } from "../../../love/public/src/html_attribute_get_unwrapped.mjs";
export function html_attribute_get_unwrapped_curried_right(key) {
  let r2 = function html_attribute_get_unwrapped_curried_right_result(element) {
    let r = html_attribute_get_unwrapped(element, key);
    return r;
  };
  return r2;
}
