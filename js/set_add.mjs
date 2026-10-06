import { assert_json } from "./assert_json.mjs";
import { set_add_try } from "./set_add_try.mjs";
import { set_includes_not } from "./set_includes_not.mjs";
export function set_add(set, item) {
  let n = set_includes_not(set, item);
  let r = {
    set,
    item,
  };
  assert_json(n, r);
  set_add_try(set, item);
}
