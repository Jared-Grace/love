import { assert_message } from "./assert_message.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
export function list_multiple_is_assert(list) {
  let m = list_multiple_is(list);
  assert_message(m, "This list was expected to hold more than one item. Would you like to check what filled it?");
}
