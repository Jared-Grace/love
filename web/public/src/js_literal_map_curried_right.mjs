import { js_literal_map } from "../../../love/public/src/js_literal_map.mjs";
export function js_literal_map_curried_right(lambda$value) {
  let r = function js_literal_map_curried_right_result(literal) {
    let value_after = js_literal_map(literal, lambda$value);
    return value_after;
  };
  return r;
}
