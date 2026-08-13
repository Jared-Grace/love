import { js_node_type_is } from "./js_node_type_is.mjs";
import { not } from "./not.mjs";
import { js_call_argument_at_try } from "./js_call_argument_at_try.mjs";
import { js_literal_value_try } from "./js_literal_value_try.mjs";
import { not_equal } from "./not_equal.mjs";
export function js_node_word_try(node) {
  "The written word standing at a node, seen through one wrapping call, and nothing at all when there is no word there. Read-only, pure.";
  "The wrapping is what this adds over asking for the word directly. A word that has already left this repo is written inside the marker that says so, and the marker hands its own first argument straight back - so the word is really there, one call further in, and a reading that stopped at the outside would call it absent.";
  "One wrapping, not any number of them. A word behind two calls is doing something this repo does not do to a published word, and answering nothing there is the safe way to be wrong.";
  let written = js_literal_value_try(node);
  let plain = not_equal(written, null);
  if (plain) {
    return written;
  }
  ("asked of whatever happens to be standing here, and most of what stands anywhere is not a call at all - the reading for what a call was given insists on being handed one, so the kind is settled first rather than after being thrown at");
  let call = js_node_type_is(node, "CallExpression");
  if (not(call)) {
    return null;
  }
  let inside = js_call_argument_at_try(node, "0");
  let word = js_literal_value_try(inside);
  return word;
}
