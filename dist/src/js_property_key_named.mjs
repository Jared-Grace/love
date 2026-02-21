import { js_identifier_named_try } from "../../../love/public/src/js_identifier_named_try.mjs";
import { js_property_key_get } from "../../../love/public/src/js_property_key_get.mjs";
export function js_property_key_named(p, search) {
  let key = js_property_key_get(p);
  let eq = js_identifier_named_try(key, search);
  return eq;
}
