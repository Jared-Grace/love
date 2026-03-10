import { js_literal_map } from "../../../love/public/src/js_literal_map.mjs";
export function js_literal_map_curried_right(lambda$value) {
  return function js_literal_map_curried_right_result(literal) {
    return js_literal_map(literal, lambda$value);
  };
}
