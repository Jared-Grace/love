import { set_add_try } from "../../../love/public/src/set_add_try.mjs";
export function set_add_try_curried(set) {
  let r = function set_add_try_curried_result(item) {
    let n = set_add_try(set, item);
    return n;
  };
  return r;
}
