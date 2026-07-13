import { assert_message } from "./assert_message.mjs";
import { js_literal_is } from "./js_literal_is.mjs";
export function js_literal_is_assert(node) {
  let li = js_literal_is(node);
  assert_message(li, "This node was expected to be a literal. Would you like to check its type?");
}
