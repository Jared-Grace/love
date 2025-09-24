import { string_dot } from "./string_dot.mjs";
import { marker } from "./marker.mjs";
export function js_code_dot(left, right) {
  marker("1");
  let code = "(" + left + string_dot() + right + ")";
  return code;
}
