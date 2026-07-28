import { arguments_assert } from "./arguments_assert.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { js_literal_value_get } from "./js_literal_value_get.mjs";
export function js_node_name_text(node) {
  arguments_assert(arguments, 1);
  ("The word a node says, whether it says it as a name or as a written word. A");
  ("setting is keyed both ways in the same object - a plain name where the setting");
  ("is one word and a written one where it holds a dash - so anything reading keys");
  ("has to take both or it silently sees half of them.");
  let named = js_identifier_name_try(node);
  let name_is = null_not_is(named);
  if (name_is) {
    return named;
  }
  let held = js_literal_value_get(node);
  return held;
}
