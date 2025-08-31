import { marker } from "./marker.mjs";
export function js_code_wrap_brackets(inside) {
  marker("1");
  let code = "[" + inside + "]";
  return code;
}
