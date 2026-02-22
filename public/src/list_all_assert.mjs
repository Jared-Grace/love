import { assert_message } from "../../../love/public/src/assert_message.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
import { list_all } from "../../../love/public/src/list_all.mjs";
export function list_all_assert(identifiers, fn) {
  let a = list_all(identifiers, fn);
  let message = json_to(identifiers);
  assert_message(a, message);
}
