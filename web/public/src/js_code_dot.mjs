import { marker } from "./marker.mjs";
export function js_code_dot(left, right) {
  marker("1");
  let code = "((" + left + ")." + right + ")";
  return code;
}
