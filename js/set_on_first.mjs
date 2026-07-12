import { set_add_try_curried } from "./set_add_try_curried.mjs";
import { set_new } from "./set_new.mjs";
export function set_on_first(lambda$sa) {
  let s = set_new();
  let set_adder = set_add_try_curried(s);
  let r = lambda$sa(set_adder);
  return r;
}
