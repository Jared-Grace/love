import { log } from "./log.mjs";
import { string_to } from "./string_to.mjs";
import { error } from "./error.mjs";
import { list_size } from "./list_size.mjs";
import { list_size_1 } from "./list_size_1.mjs";
export function list_size_1_assert_message(list) {
  if (!list_size_1(list)) {
    let message = list_size(list);
    let message2 = string_to(message);
    error(message2);
  }
}
