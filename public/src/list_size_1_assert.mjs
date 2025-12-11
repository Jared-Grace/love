import { list_size_1_assert_message } from "../../../love/public/src/list_size_1_assert_message.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { json_to } from "./json_to.mjs";
export function list_size_1_assert(list) {
  let size = list_size(list);
  let json = json_to({
    size,
  });
  list_size_1_assert_message(list, json);
}
