import { js_text } from "../../../love/public/src/js_text.mjs";
import { js_unparse } from "../../../love/public/src/js_unparse.mjs";
export function js_code_text(value_string) {
  let parsed_string = js_text(value_string);
  let code_string = js_unparse(parsed_string);
  return code_string;
}
