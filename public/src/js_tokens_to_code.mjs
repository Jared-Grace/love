import { js_parse_choose } from "../../../love/public/src/js_parse_choose.mjs";
import { js_unparse } from "../../../love/public/src/js_unparse.mjs";
import { list_join_space } from "../../../love/public/src/list_join_space.mjs";
export function js_tokens_to_code(tokens) {
  let joined = list_join_space(tokens);
  let expression = js_parse_choose(joined);
  let code = js_unparse(expression);
  return code;
}
