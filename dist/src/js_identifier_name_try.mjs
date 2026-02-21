import { js_identifier_name } from "../../../love/public/src/js_identifier_name.mjs";
import { js_identifier_is } from "../../../love/public/src/js_identifier_is.mjs";
export function js_identifier_name_try(key) {
  let name = null;
  let ii = js_identifier_is(key);
  if (ii) {
    name = js_identifier_name(key);
  }
  return name;
}
