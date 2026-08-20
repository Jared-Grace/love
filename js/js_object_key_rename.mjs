import { js_property_key_set } from "./js_property_key_set.mjs";
import { js_identifier_expression } from "./js_identifier_expression.mjs";
import { list_matching_single } from "./list_matching_single.mjs";
import { js_property_key_named_is_curried_right } from "./js_property_key_named_is_curried_right.mjs";
import { js_selects_object_properties } from "./js_selects_object_properties.mjs";
export function js_object_key_rename(ast, selects, key_before, key_after) {
  "Give one entry of a record a different name, leaving the value it holds exactly where it is.";
  "The name a report hands a number under is half of what the number says, and until now it was the half no command could change. A gate answering how much it had checked, where the number is really how much was wrong, had to be corrected by hand every time - and correcting a returned record by hand is the shape that quietly replaces the entries it did not mention.";
  "Both names are read as plain names and nothing more, so the whole path stays approvable once rather than every time. It refuses a record holding no entry under the name asked for, because a rename that quietly does nothing reads afterwards exactly like one that was carried out.";
  let properties = js_selects_object_properties(ast, selects);
  let named_is = js_property_key_named_is_curried_right(key_before);
  let hint =
    "this record has no entry under that name - would you like to check the spelling or the line it is bound to?";
  let found = list_matching_single(properties, named_is, hint, key_before);
  let expression = js_identifier_expression(key_after);
  js_property_key_set(found, expression);
}
