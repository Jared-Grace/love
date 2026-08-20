import { js_identifier_expression } from "./js_identifier_expression.mjs";
import { list_matching_single } from "./list_matching_single.mjs";
import { js_property_key_named_is_curried_right } from "./js_property_key_named_is_curried_right.mjs";
import { js_selects_object_properties } from "./js_selects_object_properties.mjs";
export function js_object_key_rename(ast, selects, key_before, key_after) {
  let properties = js_selects_object_properties(ast, selects);
  let r = js_property_key_named_is_curried_right(key_before);
  let hint =
    "this record has no entry under that name - would you like to check the spelling or the line it is bound to?";
  let found = list_matching_single(properties, r, hint, key_before);
  let expression = js_identifier_expression(key_after);
}
