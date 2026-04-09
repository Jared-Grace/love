import { js_visit_calls_named } from "../../../love/public/src/js_visit_calls_named.mjs";
export function js_statement_find_call_named(ast, f_name) {
  function lambda2() {}
  js_visit_calls_named(ast, f_name, lambda2);
}
