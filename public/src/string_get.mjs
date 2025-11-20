import { marker } from "../../../love/public/src/marker.mjs";
import { integer_is_assert } from "../../../love/public/src/integer_is_assert.mjs";
import { undefined_not_is_assert_lambda } from "../../../love/public/src/undefined_not_is_assert_lambda.mjs";
export function string_get(list, index) {
  marker("1");
  integer_is_assert(index);
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
