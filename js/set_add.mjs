import { set_add_try } from "./set_add_try.mjs";
import { assert_json_get } from "./assert_json_get.mjs";
import { set_includes_not } from "./set_includes_not.mjs";
export function set_add(set, item) {
  let n = set_includes_not(set, item);
  function lambda2() {
    let r = {
      set,
      item,
    };
    return r;
  }
  assert_json_get(n, lambda2);
  set_add_try(item);
}
