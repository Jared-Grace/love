import { assert_json_get } from "./assert_json_get.mjs";
import { list_all } from "./list_all.mjs";
export function list_all_assert(identifiers, fn) {
  let a = list_all(identifiers, fn);
  function lambda() {
    return identifiers;
  }
  assert_json_get(a, lambda);
}
