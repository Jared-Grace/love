import { integer_is_assert_json } from "./integer_is_assert_json.mjs";
export function list_get_try(list, index) {
  integer_is_assert_json(index, {
    hint: "a list index should be a whole number — did a non-integer index arrive?",
  });
  let item = list[index];
  return item;
}
