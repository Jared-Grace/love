import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
import { list_get_end } from "./list_get_end.mjs";
export function list_last(list) {
  list_empty_not_is_assert_json(list, {
    hint: "the list should have at least one item to take its last — was it empty?",
  });
  let last = list_get_end(list, 0);
  return last;
}
