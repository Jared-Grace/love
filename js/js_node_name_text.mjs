import { js_node_name_text_try } from "./js_node_name_text_try.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { js_literal_value_get } from "./js_literal_value_get.mjs";
export function js_node_name_text(node) {
  arguments_assert(arguments, 1);
  ("The word a node says, whether it says it as a name or as a written word. A");
  ("setting is keyed both ways in the same object - a plain name where the setting");
  ("is one word and a written one where it holds a dash - so anything reading keys");
  ("has to take both or it silently sees half of them.");
  let named = js_node_name_text_try(node);
  let name_is = null_not_is(named);
  if (name_is) {
    return named;
  }
  ("A node saying no word reaches the reader that asks for one, whose refusal names");
  ("what was expected. Refusing here in its own words would be a second account of");
  ("the same disappointment, kept in step with the first by nothing.");
  let held = js_literal_value_get(node);
  return held;
}
