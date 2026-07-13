import { assert_message } from "./assert_message.mjs";
import { list_unique_is } from "./list_unique_is.mjs";
export function list_unique_is_assert(list) {
  let u = list_unique_is(list);
  assert_message(
    u,
    "This list was expected to hold only unique items. Would you like to check for duplicates?",
  );
}
