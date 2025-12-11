import { list_size_1_assert_message } from "../../../love/public/src/list_size_1_assert_message.mjs";
import { string_to } from "../../../love/public/src/string_to.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
export function list_size_1_assert(list) {
  let size = list_size(list);
  let message2 = string_to(size);
  list_size_1_assert_message(list, message2);
}
