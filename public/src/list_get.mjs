import { list_get_try } from "../../../love/public/src/list_get_try.mjs";
import { undefined_not_is_assert_lambda } from "../../../love/public/src/undefined_not_is_assert_lambda.mjs";
export function list_get(list, index) {
  let item = list_get_try(list, index);
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
