import { js_code_wrap_brackets } from "./js_code_wrap_brackets.mjs";
import { marker } from "./marker.mjs";
export function js_code_brackets_empty(inside) {
  marker("1");
  let code = js_code_wrap_brackets("");
  return code;
}
