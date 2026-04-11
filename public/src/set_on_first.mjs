import { set_add } from "../../../love/public/src/set_add.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { set_includes } from "../../../love/public/src/set_includes.mjs";
import { set_new } from "../../../love/public/src/set_new.mjs";
export function set_on_first(sof) {
  let s = set_new();
  function on_first_check(item) {
    let si = set_includes(set, item);
    if (not(si)) {
      set_add(s2, item2);
    }
  }
  sof(on_first_check);
}
