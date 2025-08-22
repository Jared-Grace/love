import { not } from "./not.mjs";
import { error } from "./error.mjs";
import { list_size_1 } from "./list_size_1.mjs";
export function list_size_1_assert_message(list, message) {
  let a = list_size_1(list);
  if (not(a)) {
    error(message);
  }
}
