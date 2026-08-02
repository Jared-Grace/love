import { js_call_callee_name_equal } from "./js_call_callee_name_equal.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_expression_statement_is } from "./js_expression_statement_is.mjs";
import { not } from "./not.mjs";
import { js_statement_expression_get } from "./js_statement_expression_get.mjs";
import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
import { list_size_2 } from "./list_size_2.mjs";
import { list_first } from "./list_first.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
import { list_second } from "./list_second.mjs";
export function js_list_add_call_try(node) {
  let esi = js_expression_statement_is(node);
  if (not(esi)) {
    return null;
  }
  let expression = js_statement_expression_get(node);
  let e = js_call_callee_name_equal(expression, fn_name("list_add"));
  if (not(e)) {
    return null;
  }
  let args = js_call_arguments_get(expression);
  let s2 = list_size_2(args);
  if (not(s2)) {
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
