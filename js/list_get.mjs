import { indexed_get_generic } from "./indexed_get_generic.mjs";
import { integer_is_assert_json } from "./integer_is_assert_json.mjs";
import { undefined_not_is_assert_lambda } from "./undefined_not_is_assert_lambda.mjs";
export function list_get(list, index) {
  let item = indexed_get_generic(list, index, "list", object_get);
  function object_get() {
    let v = {
      list,
      index,
    };
    return v;
  }
  return item;
}
