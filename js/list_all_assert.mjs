import { assert_json_get } from "./assert_json_get.mjs";
import { list_all } from "./list_all.mjs";
export function list_all_assert(list, fn) {
  let a = list_all(list, fn);
  function lambda() {
    return list;
  }
  assert_json_get(a, lambda);
}
