import { js_code_bracket_close } from "../../../love/public/src/js_code_bracket_close.mjs";
import { js_code_bracket_open } from "../../../love/public/src/js_code_bracket_open.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function js_code_wrap_brackets(inside) {
  marker("1");
  let code = js_code_bracket_open() + inside + js_code_bracket_close();
  return code;
}
