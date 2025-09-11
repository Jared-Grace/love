import { marker } from "./marker.mjs";
export function js_code_dot(left, right) {
  marker("1");
  let v = +"((" + left + ").(" + right + "))";
  return v;
}
