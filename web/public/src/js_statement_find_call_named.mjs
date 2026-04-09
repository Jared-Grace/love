import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { js_visit_calls_named } from "../../../love/public/src/js_visit_calls_named.mjs";
export function js_statement_find_call_named(ast, f_name) {
  function lambda(la) {}
  let list = list_adder(lambda);
  function lambda2() {}
  js_visit_calls_named(ast, f_name, lambda2);
}
