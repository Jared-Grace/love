import { js_code_comma } from "../../../love/public/src/js_code_comma.mjs";
import { list_join } from "../../../love/public/src/list_join.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function js_code_join_comma_space(args) {
  let v = list_join(args, text_combine(js_code_comma(), " "));
  return v;
}
