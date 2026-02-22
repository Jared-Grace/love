import { js_identifier_named } from "../../../love/public/src/js_identifier_named.mjs";
export function js_identifier_named_curried_right(identifier_name) {
  return function js_identifier_named_curried_right_result(i) {
    return js_identifier_named(i, identifier_name);
  };
}
