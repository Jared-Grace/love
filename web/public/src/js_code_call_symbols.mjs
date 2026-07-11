import { list_concat_single_right } from "../../../love/public/src/list_concat_single_right.mjs";
import { js_code_comma } from "../../../love/public/src/js_code_comma.mjs";
import { js_code_parenthesis_list } from "../../../love/public/src/js_code_parenthesis_list.mjs";
export function js_code_call_symbols() {
  let list = js_code_parenthesis_list();
  let single = js_code_comma();
  let symbols_required = list_concat_single_right(list, single);
  return symbols_required;
}
