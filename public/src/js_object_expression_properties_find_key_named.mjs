import { list_find } from "../../../love/public/src/list_find.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { log_unparse } from "../../../love/public/src/log_unparse.mjs";
import { js_property_key_named_curried_right } from "../../../love/public/src/js_property_key_named_curried_right.mjs";
import { js_object_expression_properties } from "../../../love/public/src/js_object_expression_properties.mjs";
export function js_object_expression_properties_find_key_named(e, search) {
  let properties = js_object_expression_properties(e);
  log_unparse(e);
  let r = js_property_key_named_curried_right(search);
  let found = list_find_or_null(properties, r);
  log({
    found,
  });
  return found;
}
