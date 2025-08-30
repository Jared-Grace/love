import { marker } from "./marker.mjs";
export function js_code_wrap_brackets(inside) {
  marker("1");
  let v = "{" + inside + "}";
  return v;
}
