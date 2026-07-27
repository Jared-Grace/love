import { arguments_assert } from "./arguments_assert.mjs";
import { js_selects_array_elements } from "./js_selects_array_elements.mjs";
import { js_array_element_text_find } from "./js_array_element_text_find.mjs";
import { js_array_text_insert_beside } from "./js_array_text_insert_beside.mjs";
export function js_array_text_add_before(ast, selects, text, before_text) {
  arguments_assert(arguments, 4);
  ("Puts one written word into an ordered register, directly before the word");
  ("already there that is named. The sibling of the one that puts it after, and");
  ("both exist for the same reason the two call-adding verbs do: a gap has two");
  ("neighbours and only one of them may be nameable.");
  ("The first entry of a list is the case that needs this one. Nothing sits above");
  ("it to name, so naming what it sits above is the only way to reach that place");
  ("at all.");
  let elements = js_selects_array_elements(ast, selects);
  let found = js_array_element_text_find(elements, before_text);
  let delta = 0;
  js_array_text_insert_beside(elements, found, text, delta);
}
