import { js_callee_name_includes_try } from "../../love/js/js_callee_name_includes_try.mjs";
export function js_callee_name_includes_try_curried_right(part) {
  let c = function js_callee_name_includes_try_curried_right_result(n) {
    return js_callee_name_includes_try(n, part);
  };
  return c;
}
