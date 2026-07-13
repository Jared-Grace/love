import { list_difference } from "./list_difference.mjs";
import { assert_json_get } from "./assert_json_get.mjs";
import { list_includes_all } from "./list_includes_all.mjs";
export function list_includes_all_assert_json(list, items, json) {
  let includes_all = list_includes_all(list, items);
  function lambda() {
    let missing = list_difference(list, items);
    let r = {
      list,
      items,
      missing,
      json,
    };
    return r;
  }
  assert_json_get(includes_all, lambda);
  return includes_all;
}
