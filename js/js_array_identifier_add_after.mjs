import { arguments_assert } from "./arguments_assert.mjs";
import { js_selects_array_elements } from "./js_selects_array_elements.mjs";
import { js_array_element_identifier_find } from "./js_array_element_identifier_find.mjs";
import { js_array_identifier_insert_beside } from "./js_array_identifier_insert_beside.mjs";
export function js_array_identifier_add_after(
  ast,
  selects,
  identifier_name,
  after_name,
) {
  arguments_assert(arguments, 4);
  ("Puts one name into an ordered register of functions, directly after the one");
  ("already there that is named. The verb that only appends is right whenever the");
  ("order carries no meaning, and wrong for the registers where it does - a list");
  ("of gates ends with the one that reports on the rest, and a gate appended after");
  ("that reports on a run it was not part of.");
  ("The place is named by its neighbour rather than by counting, because a count");
  ("is wrong the moment anybody inserts above it and nothing says so, while a");
  ("neighbour is either still there or the command refuses.");
  let elements = js_selects_array_elements(ast, selects);
  let found = js_array_element_identifier_find(elements, after_name);
  let delta = 1;
  js_array_identifier_insert_beside(elements, found, identifier_name, delta);
}
