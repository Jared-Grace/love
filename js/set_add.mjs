import { assert_json_get } from "./assert_json_get.mjs";
import { set_includes_not } from "./set_includes_not.mjs";
export function set_add(set, item) {
  let n = set_includes_not(set, item);
  set.add(item);
  return;
  function lambda2() {
    let r = {
      set,
      item,
    };
    return r;
  }
  assert_json_get(b, lambda2);
}
