import { list_splice } from "./list_splice.mjs";
import { assert_message } from "./assert_message.mjs";
import { number_is } from "./number_is.mjs";
export function list_insert_generic(index, list, delete_count, value) {
  let b = number_is(index);
  assert_message(
    b,
    "Expected the insert index to be a number. Would you like to check what was passed as the index?",
  );
  list_splice(list, index, delete_count, value);
}
