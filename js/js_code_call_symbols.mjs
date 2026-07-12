import { list_concat_single_right } from "./list_concat_single_right.mjs";
import { js_code_comma } from "./js_code_comma.mjs";
import { js_code_parenthesis_list } from "./js_code_parenthesis_list.mjs";
export function js_code_call_symbols() {
  let list2 = js_code_parenthesis_list();
  let single = js_code_comma();
  let symbols_required = list_concat_single_right(list2, single);
  return symbols_required;
}
