import { js_property_key_named } from "../../../love/public/src/js_property_key_named.mjs";
export function js_property_key_named_curried_right(search) {
  let r = function js_property_key_named_curried_right_result(p) {
    let eq = js_property_key_named(p, search);
    return eq;
  };
  return r;
}
