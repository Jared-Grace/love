import { set_add_try } from "../../../love/public/src/set_add_try.mjs";
export function set_add_try_curried(set) {
  return function set_add_try_curried_result(item) {
    return set_add_try(set, item);
  };
}
