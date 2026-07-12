import { assert_message } from "./assert_message.mjs";
import { json_to } from "./json_to.mjs";
import { list_all } from "./list_all.mjs";
export function list_all_assert(identifiers, fn) {
  let a = list_all(identifiers, fn);
  let message = json_to(identifiers);
  assert_message(a, message);
}
