import { string_dot } from "../../../love/public/src/string_dot.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function js_code_dot(left, right) {
  marker("1");
  let code = "(" + left + string_dot() + right + ")";
  return code;
}
