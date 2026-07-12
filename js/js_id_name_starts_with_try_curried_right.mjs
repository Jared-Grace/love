import { js_id_name_starts_with_try } from "../../love/js/js_id_name_starts_with_try.mjs";
export function js_id_name_starts_with_try_curried_right(prefix) {
  let c = function js_id_name_starts_with_try_curried_right_result(n) {
    return js_id_name_starts_with_try(n, prefix);
  };
  return c;
}
