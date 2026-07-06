import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { js_visit_calls_named } from "../../../love/public/src/js_visit_calls_named.mjs";
export function js_list_calls_named(ast, f_name) {
  function lambda2(la) {
    js_visit_calls_named(ast, f_name, la);
  }
  let list = list_adder(lambda2);
  return list;
}
