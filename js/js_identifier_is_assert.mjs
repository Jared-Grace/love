import { assert_message } from "./assert_message.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
export function js_identifier_is_assert(expression) {
  let ii = js_identifier_is(expression);
  assert_message(ii, "This expression was expected to be an identifier. Would you like to check what kind of node it is?");
}
