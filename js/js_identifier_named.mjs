import { equal } from "./equal.mjs";
import { js_identifier_name } from "./js_identifier_name.mjs";
export function js_identifier_named(i, identifier_name) {
  let left = js_identifier_name(i);
  let r = equal(left, identifier_name);
  return r;
}
