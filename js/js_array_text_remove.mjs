import { js_array_element_text_find } from "./js_array_element_text_find.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_selects_array_elements } from "./js_selects_array_elements.mjs";
import { list_remove } from "./list_remove.mjs";
export function js_array_text_remove(ast, selects, text) {
  arguments_assert(arguments, 3);
  ("Takes one written word back out of an ordered register. The undoing of the");
  ("verb that puts one in, and the reason to have it is that a register is not");
  ("only added to — an example withdrawn, an entry put in the wrong list and");
  ("moved to the right one.");
  ("Moving an entry is the ordinary case rather than the rare one: adding can only");
  ("append, so anything that has to sit in a particular place arrives at the end");
  ("and then has to leave. Until this, leaving was a hand edit.");
  ("It refuses a word the list does not hold rather than doing nothing quietly,");
  ("since the two look identical afterwards and only one of them was meant.");
  let elements = js_selects_array_elements(ast, selects);
  let found = js_array_element_text_find(elements, text);
  list_remove(elements, found);
}
