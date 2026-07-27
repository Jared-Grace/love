import { arguments_assert } from "./arguments_assert.mjs";
import { js_selects_array_elements } from "./js_selects_array_elements.mjs";
import { js_array_element_identifier_find } from "./js_array_element_identifier_find.mjs";
import { js_array_element_move_beside } from "./js_array_element_move_beside.mjs";
export function js_array_identifier_move(
  ast,
  selects,
  identifier_name,
  after_name,
) {
  arguments_assert(arguments, 4);
  ("Moves a name already in an ordered register of functions to sit directly after");
  ("another name already there. The twin next door does this for a register of");
  ("written words; this is the same move in the list whose entries are names, and");
  ("that is the list where the order carries the most meaning — a run of gates");
  ("ends with the one that reports on the rest, and a gate sitting after that one");
  ("reports on a run it was not part of.");
  ("The place is named by its neighbour rather than counted, for the same reason");
  ("the add-beside verbs name one: a count is wrong the moment anybody inserts");
  ("above it and nothing says so, while a neighbour is either still there or the");
  ("command refuses.");
  ("Both names are looked up BEFORE anything is taken out, so a wrong neighbour");
  ("refuses against the list the caller meant rather than against a list already");
  ("half-changed.");
  let elements = js_selects_array_elements(ast, selects);
  let moving = js_array_element_identifier_find(elements, identifier_name);
  let neighbour = js_array_element_identifier_find(elements, after_name);
  let delta = 1;
  js_array_element_move_beside(elements, moving, neighbour, delta);
}
