import { js_identifier_named } from "./js_identifier_named.mjs";
export function js_identifier_named_curried_right(identifier_name) {
  let r2 = function js_identifier_named_curried_right_result(i) {
    let r = js_identifier_named(i, identifier_name);
    return r;
  };
  return r2;
}
