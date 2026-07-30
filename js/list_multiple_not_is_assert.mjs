import { assert_json } from "./assert_json.mjs";
import { list_multiple_not_is } from "./list_multiple_not_is.mjs";
export function list_multiple_not_is_assert(list) {
  let n = list_multiple_not_is(list);
  let r = {
    list,
  };
  assert_json(n, r);
}
