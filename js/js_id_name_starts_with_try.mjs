import { js_identifier_name_starts_with_try } from "../../love/js/js_identifier_name_starts_with_try.mjs";
import { property_get } from "../../love/js/property_get.mjs";
export function js_id_name_starts_with_try(n, prefix) {
  let id = property_get(n, "id");
  let starts_with = js_identifier_name_starts_with_try(id, prefix);
  return starts_with;
}
