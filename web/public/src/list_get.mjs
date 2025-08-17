import { undefined_not_is_assert_lambda } from "./undefined_not_is_assert_lambda.mjs";
export function list_get(list, index) {
  let v = list[index];
  undefined_not_is_assert_lambda(value, object_get);
  return v;
  function object_get() {
    let v = {
      list,
      index,
    };
    return v;
  }
}
