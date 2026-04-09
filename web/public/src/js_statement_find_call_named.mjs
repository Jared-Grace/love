import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { js_visit_calls_named } from "../../../love/public/src/js_visit_calls_named.mjs";
export async function js_statement_find_call_named(ast, f_name) {
  let unaliased = await function_name_unalias_only(f_name);
  function lambda(la) {
    js_visit_calls_named(ast, unaliased, la);
  }
  let list = list_adder(lambda);
  let only = list_single(list);
  return only;
}
