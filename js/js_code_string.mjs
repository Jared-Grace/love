import { js_string } from "../../../love/public/src/js_string.mjs";
import { js_unparse } from "../../../love/public/src/js_unparse.mjs";
export function js_code_string(value_string) {
  let parsed_string = js_string(value_string);
  let code_string = js_unparse(parsed_string);
  return code_string;
}
