import { list_size_assert_message } from "../../../love/public/src/list_size_assert_message.mjs";
import { list_first_second } from "../../../love/public/src/list_first_second.mjs";
export function list_first_second_only(list) {
  let result = list_first_second(list);
  const message = {};
  list_size_assert_message(result, 2, message);
  return result;
}
