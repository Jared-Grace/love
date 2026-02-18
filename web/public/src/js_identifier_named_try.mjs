import { equal } from "../../../love/public/src/equal.mjs";
import { js_identifier_name_try } from "../../../love/public/src/js_identifier_name_try.mjs";
export function js_identifier_named_try(candidate, name) {
  let name = js_identifier_name_try(candidate);
  let eq2 = equal(name, name);
  return eq2;
}
