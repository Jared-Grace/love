import { set_add } from "../../../love/public/src/set_add.mjs";
import { set_includes_not } from "../../../love/public/src/set_includes_not.mjs";
export function set_add_try(set, item) {
  let n = set_includes_not(set, item);
  if (n) {
    set_add(set, item);
  }
  return n;
}
