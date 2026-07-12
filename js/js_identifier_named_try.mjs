import { equal } from "./equal.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
export function js_identifier_named_try(candidate, name) {
  let actual = js_identifier_name_try(candidate);
  let eq = equal(actual, name);
  return eq;
}
