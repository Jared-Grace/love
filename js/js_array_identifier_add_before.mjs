import { arguments_assert } from "./arguments_assert.mjs";
import { js_selects_array_elements } from "./js_selects_array_elements.mjs";
import { js_array_element_identifier_find } from "./js_array_element_identifier_find.mjs";
import { js_array_identifier_insert_beside } from "./js_array_identifier_insert_beside.mjs";
export function js_array_identifier_add_before(
  ast,
  selects,
  identifier_name,
  before_name,
) {
  arguments_assert(arguments, 4);
  ("Puts one name into an ordered register of functions, directly before the one");
  ("already there that is named. This is the side that reaches the head of a list,");
  ("which the other side cannot: the first entry has no neighbour above it to");
  ("name, so without this verb the only way in front of it is by hand.");
  let elements = js_selects_array_elements(ast, selects);
  let found = js_array_element_identifier_find(elements, before_name);
  let delta = 0;
  js_array_identifier_insert_beside(elements, found, identifier_name, delta);
}
