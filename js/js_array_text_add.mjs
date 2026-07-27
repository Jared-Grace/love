import { js_selects_array_elements } from "./js_selects_array_elements.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_string } from "./js_string.mjs";
import { list_add } from "./list_add.mjs";
export function js_array_text_add(ast, selects, text) {
  arguments_assert(arguments, 3);
  ("Adds one written word to a list of them. The pair to the verb that adds a");
  ("name to a set of settings, for the registers that are ordered rather than");
  ("named — a reading order, a run of groups.");
  ("The word becomes a written word and nothing else: it is built as one straight");
  ("away rather than being spelled into a line and read back, so there is no point");
  ("at which it could be taken for something to work out.");
  let elements = js_selects_array_elements(ast, selects);
  let literal = js_string(text);
  list_add(elements, literal);
}
