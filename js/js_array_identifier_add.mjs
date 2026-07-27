import { arguments_assert } from "./arguments_assert.mjs";
import { js_selects_array_elements } from "./js_selects_array_elements.mjs";
import { js_identifier_expression } from "./js_identifier_expression.mjs";
import { list_add } from "./list_add.mjs";
export function js_array_identifier_add(ast, selects, identifier_name) {
  arguments_assert(arguments, 3);
  ("Adds one name to an ordered register of things rather than of words. The twin");
  ("next door writes a written word, which is right for a reading order and wrong");
  ("for a list of functions: the entry has to stand for the function itself, since");
  ("something reads that list and runs what is in it.");
  ("Using the wrong twin fails in the worst way available. A written word put into");
  ("a list of functions is rewritten by the auto pass into the name-of a function,");
  ("which reads as a live entry, sits in the list looking exactly like its");
  ("neighbours, and runs nothing — in the one kind of list whose whole job is to");
  ("run what it holds.");
  let elements = js_selects_array_elements(ast, selects);
  let identifier = js_identifier_expression(identifier_name);
  list_add(elements, identifier);
}
