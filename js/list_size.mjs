import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_is_assert_json } from "./list_is_assert_json.mjs";
export function list_size(list) {
  list_is_assert_json(list, {
    hint: text_combine_multiple([list_size.name, " expects a list to measure"]),
  });
  let size = list.length;
  return size;
}
