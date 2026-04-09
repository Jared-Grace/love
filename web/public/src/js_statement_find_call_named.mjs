import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { js_visit_calls_named } from "../../../love/public/src/js_visit_calls_named.mjs";
export function js_statement_find_call_named(ast, f_name) {
  function lambda(la) {
    js_visit_calls_named(ast, f_name, la);
  }
  let list = list_adder(lambda);
}
