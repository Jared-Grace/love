import { assert_message } from "./assert_message.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export function list_empty_not_is_assert(list) {
  let ne = list_empty_not_is(list);
  assert_message(ne, "This list was expected to have at least one item. Would you like to check what should have filled it?");
}
