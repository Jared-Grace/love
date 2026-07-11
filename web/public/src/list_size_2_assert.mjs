import { list_size_assert_message } from "../../../love/public/src/list_size_assert_message.mjs";
export function list_size_2_assert(result) {
  let message = {};
  list_size_assert_message(result, 2, message);
}
