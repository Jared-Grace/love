import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { js_literal_is } from "./js_literal_is.mjs";
import { js_literal_value_get } from "./js_literal_value_get.mjs";
export function js_node_name_text_try(node) {
  "The word a node says, whether it says it as a name or as a written word, and nothing at all when it says no word.";
  "Not every node standing where a word belongs is one. A binding can be a whole shape being taken apart, and a field can be keyed by something worked out rather than written, and both sit exactly where a plain name sits. Asking for the word and being handed an error is right for a caller that cannot go on without one, and wrong for a caller whose next line is a fallback - that one was ending an entire report over a single node it was ready to describe by its shape instead.";
  let named = js_identifier_name_try(node);
  let name_is = null_not_is(named);
  if (name_is) {
    return named;
  }
  let literal_is = js_literal_is(node);
  if (literal_is) {
    let held = js_literal_value_get(node);
    return held;
  }
  return null;
}
