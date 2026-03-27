import { list_difference } from "../../../love/public/src/list_difference.mjs";
import { assert_json_get } from "../../../love/public/src/assert_json_get.mjs";
import { list_includes_all } from "../../../love/public/src/list_includes_all.mjs";
export function list_includes_all_assert(list, items) {
  let includes_all = list_includes_all(list, items);
  function lambda2() {
    let missing = list_difference(list, items);
    let r3 = {
      list,
      items,
      missing,
    };
    return r3;
  }
  assert_json_get(includes_all, lambda2);
  return includes_all;
}
