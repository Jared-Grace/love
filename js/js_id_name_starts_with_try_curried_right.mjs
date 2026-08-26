import { js_id_name_starts_with_try } from "./js_id_name_starts_with_try.mjs";
export function js_id_name_starts_with_try_curried_right(prefix) {
  let c = function js_id_name_starts_with_try_curried_right_result(n) {
    let starts_with = js_id_name_starts_with_try(n, prefix);
    return starts_with;
  };
  return c;
}
