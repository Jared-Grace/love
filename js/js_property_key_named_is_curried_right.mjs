import { js_property_key_named_is } from "./js_property_key_named_is.mjs";
export function js_property_key_named_is_curried_right(search) {
  let r = function js_property_key_named_curried_right_result(p) {
    let eq = js_property_key_named_is(p, search);
    return eq;
  };
  return r;
}
