import { js_expression_statement_is } from "../../love/js/js_expression_statement_is.mjs";
import { not } from "../../love/js/not.mjs";
import { js_statement_expression_get } from "../../love/js/js_statement_expression_get.mjs";
import { js_call_callee_name_try } from "../../love/js/js_call_callee_name_try.mjs";
import { list_add } from "../../love/js/list_add.mjs";
import { equal } from "../../love/js/equal.mjs";
import { js_call_arguments_get } from "../../love/js/js_call_arguments_get.mjs";
import { list_size_2 } from "../../love/js/list_size_2.mjs";
import { list_first } from "../../love/js/list_first.mjs";
import { js_identifier_is } from "../../love/js/js_identifier_is.mjs";
import { list_second } from "../../love/js/list_second.mjs";
export function js_list_add_call_try(node) {
  let esi = js_expression_statement_is(node);
  if (not(esi)) {
    return null;
  }
  let expression = js_statement_expression_get(node);
  let name = js_call_callee_name_try(expression);
  let e = equal(name, list_add.name);
  if (not(e)) {
    return null;
  }
  let args = js_call_arguments_get(expression);
  let s = list_size_2(args);
  if (not(s)) {
    return null;
  }
  let list = list_first(args);
  let ii = js_identifier_is(list);
  if (not(ii)) {
    return null;
  }
  let value = list_second(args);
  let result = {
    list,
    value,
  };
  return result;
}
