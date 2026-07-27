import { arguments_assert } from "./arguments_assert.mjs";
import { js_selects_array_elements } from "./js_selects_array_elements.mjs";
import { js_array_element_identifier_find } from "./js_array_element_identifier_find.mjs";
import { list_remove } from "./list_remove.mjs";
export function js_array_identifier_remove(ast, selects, identifier_name) {
  arguments_assert(arguments, 3);
  ("Takes one name back out of an ordered register of functions. The undoing of");
  ("the verb that puts one in, and until this the only half of that pair that");
  ("existed on the name side — a register of words could be added to and taken");
  ("from, a register of functions could only grow.");
  ("Which mattered most in the one list that runs things: retiring a gate, or");
  ("moving one to a different place in the order, was a hand edit, and a hand edit");
  ("is committed under a message that names no command at all. So the list the");
  ("repo edits most often was the list its own vocabulary could not edit.");
  ("It refuses a name the list does not hold rather than doing nothing quietly,");
  ("since the two look identical afterwards and only one of them was meant.");
  let elements = js_selects_array_elements(ast, selects);
  let found = js_array_element_identifier_find(elements, identifier_name);
  list_remove(elements, found);
}
