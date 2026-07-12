import { js_identifier_is_if } from "../../love/js/js_identifier_is_if.mjs";
import { js_identifier_name_starts_with } from "../../love/js/js_identifier_name_starts_with.mjs";
export function js_identifier_name_starts_with_try(id, prefix) {
  let starts_with = false;
  function lambda3() {
    starts_with = js_identifier_name_starts_with(id, prefix);
  }
  js_identifier_is_if(id, lambda3);
  return starts_with;
}
