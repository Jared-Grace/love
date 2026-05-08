import { integer_is_assert } from "../../../love/public/src/integer_is_assert.mjs";
import { list_get_try } from "../../../love/public/src/list_get_try.mjs";
import { undefined_not_is_assert_lambda } from "../../../love/public/src/undefined_not_is_assert_lambda.mjs";
export function list_get(list, index) {
  let item2 = list_get_try(list, index);
  undefined_not_is_assert_lambda(item2, object_get);
  function object_get() {
    let v = {
      list,
      index,
    };
    return v;
  }
  return item2;
  integer_is_assert(index);
  let item = list[index];
}
