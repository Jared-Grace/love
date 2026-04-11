import { set_add_try_curried } from "../../../love/public/src/set_add_try_curried.mjs";
import { set_new } from "../../../love/public/src/set_new.mjs";
export function set_on_first(sof) {
  let s = set_new();
  let on_first_check = set_add_try_curried(s);
  sof(on_first_check);
}
