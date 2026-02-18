import { equal } from "../../../love/public/src/equal.mjs";
import { js_identifier_name_try } from "../../../love/public/src/js_identifier_name_try.mjs";
export function js_identifier_named_try(candidate, search) {
  let actual = js_identifier_name_try(candidate);
  let eq2 = equal(actual, search);
  return eq2;
}
