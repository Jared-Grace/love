import { js_callee_name_includes_try } from "./js_callee_name_includes_try.mjs";
export function js_callee_name_includes_try_curried_right(part) {
  let c = function js_callee_name_includes_try_curried_right_result(n) {
    let includes = js_callee_name_includes_try(n, part);
    return includes;
  };
  return c;
}
