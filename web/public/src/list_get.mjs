import { undefined_not_is_assert_lambda } from "./undefined_not_is_assert_lambda.mjs";
export function list_get(list, index) {
  let value = list[index];
  undefined_not_is_assert_lambda(value, object_get);
  return value;
  function object_get() {
    let v = {
      list,
      index,
    };
    return v;
  }
}
