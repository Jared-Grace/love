import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
import { js_code_colon } from "../../../love/public/src/js_code_colon.mjs";
import { js_code_wrap_brackets } from "../../../love/public/src/js_code_wrap_brackets.mjs";
import { js_code_string } from "../../../love/public/src/js_code_string.mjs";
export function js_code_property(key, value) {
  let code_string = js_code_string(key);
  let code2 = js_code_wrap_brackets(code_string);
  let c = js_code_colon();
  let combined = text_combine_multiple([code2, c, " ", value]);
  return combined;
}
