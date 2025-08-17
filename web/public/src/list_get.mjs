import { integer_is_assert } from "./integer_is_assert.mjs";
import { assert_json } from "./assert_json.mjs";
import { assert_message } from "./assert_message.mjs";
import { assert } from "./assert.mjs";
import { integer_is } from "./integer_is.mjs";
import { undefined_not_is_assert_lambda } from "./undefined_not_is_assert_lambda.mjs";
export function list_get(list, index) {
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
