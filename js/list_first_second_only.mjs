import { list_size_2_assert_json } from "./list_size_2_assert_json.mjs";
import { list_first_second } from "./list_first_second.mjs";
export function list_first_second_only(list) {
  list_size_2_assert_json(list, {
    hint: "the list should have exactly two items to take a first and second",
  });
  let result = list_first_second(list);
  if (false) {
    let copy_paste = {
      first,
      second,
    };
  }
  return result;
}
