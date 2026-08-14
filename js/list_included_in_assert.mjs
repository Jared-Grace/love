import { list_difference } from "./list_difference.mjs";
import { assert_json_get } from "./assert_json_get.mjs";
import { list_included_in_is } from "./list_included_in_is.mjs";
export function list_included_in_assert(list, items) {
  let includes_all = list_included_in_is(list, items);
  function lambda() {
    let missing = list_difference(list, items);
    let r = {
      list,
      items,
      missing,
    };
    return r;
  }
  assert_json_get(includes_all, lambda);
  return includes_all;
}
