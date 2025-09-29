import { js_code_wrap_brackets } from "../../../love/public/src/js_code_wrap_brackets.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function js_code_brackets_empty() {
  marker("1");
  let code = js_code_wrap_brackets("");
  return code;
}
