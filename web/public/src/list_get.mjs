import { integer_is_assert } from "../../../love/public/src/integer_is_assert.mjs";
import { assert_json } from "../../../love/public/src/assert_json.mjs";
import { assert_message } from "../../../love/public/src/assert_message.mjs";
import { assert } from "../../../love/public/src/assert.mjs";
import { integer_is } from "../../../love/public/src/integer_is.mjs";
import { undefined_not_is_assert_lambda } from "../../../love/public/src/undefined_not_is_assert_lambda.mjs";
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
