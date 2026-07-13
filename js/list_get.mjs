import { integer_is_assert_json } from "./integer_is_assert_json.mjs";
import { undefined_not_is_assert_lambda } from "./undefined_not_is_assert_lambda.mjs";
export function list_get(list, index) {
  integer_is_assert_json(index, {
    hint: "a list index should be a whole number — did a non-integer index arrive?",
  });
  let item = list[index];
  undefined_not_is_assert_lambda(item, object_get);
  function object_get() {
    let v = {
      list,
      index,
    };
    return v;
  }
  return item;
}
