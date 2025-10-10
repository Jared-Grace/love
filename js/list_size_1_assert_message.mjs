import { not } from "../../../love/public/src/not.mjs";
import { error } from "../../../love/public/src/error.mjs";
import { list_size_1 } from "../../../love/public/src/list_size_1.mjs";
export function list_size_1_assert_message(list, message) {
  let a = list_size_1(list);
  if (not(a)) {
    error(message);
  }
}
