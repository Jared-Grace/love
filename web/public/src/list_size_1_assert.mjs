import { list_size_1_assert_message } from "./list_size_1_assert_message.mjs";
import { string_to } from "./string_to.mjs";
import { list_size } from "./list_size.mjs";
export function list_size_1_assert(list) {
  let message = list_size(list);
  let message2 = string_to(message);
  list_size_1_assert_message(list, message2);
}
