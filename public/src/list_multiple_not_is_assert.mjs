import { assert_json_get } from "../../../love/public/src/assert_json_get.mjs";
import { list_multiple_not_is } from "../../../love/public/src/list_multiple_not_is.mjs";
export function list_multiple_not_is_assert(list) {
  let n = list_multiple_not_is(list);
  function lambda() {
    let r = {
      list,
    };
    return r;
  }
  assert_json_get(n, lambda);
}
