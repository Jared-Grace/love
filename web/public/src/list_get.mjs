import { integer_is } from "./integer_is.mjs";
import { undefined_not_is_assert_lambda } from "./undefined_not_is_assert_lambda.mjs";
export function list_get(list, index) {
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
  let ii = integer_is(value);
}
