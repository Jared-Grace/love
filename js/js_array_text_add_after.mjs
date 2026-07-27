import { arguments_assert } from "./arguments_assert.mjs";
import { js_selects_array_elements } from "./js_selects_array_elements.mjs";
import { js_array_element_text_find } from "./js_array_element_text_find.mjs";
import { js_array_text_insert_beside } from "./js_array_text_insert_beside.mjs";
export function js_array_text_add_after(ast, selects, text, after_text) {
  arguments_assert(arguments, 4);
  ("Puts one written word into an ordered register, directly after the word");
  ("already there that is named. Every other register verb can only append, so an");
  ("entry that has to sit in a particular place - a rung of a reading order, a");
  ("gate that must run after another one - arrived at the end and was then moved");
  ("by hand, which was the commonest hand edit left.");
  ("The place is named by its neighbour rather than by counting, because a count");
  ("is wrong the moment anybody inserts above it and nothing says so, while a");
  ("neighbour is either still there or the command refuses.");
  let elements = js_selects_array_elements(ast, selects);
  let found = js_array_element_text_find(elements, after_text);
  let delta = 1;
  js_array_text_insert_beside(elements, found, text, delta);
}
