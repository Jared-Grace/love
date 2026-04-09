import { log } from "../../../love/public/src/log.mjs";
import { list_adder_single } from "../../../love/public/src/list_adder_single.mjs";
import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
import { js_visit_calls_named } from "../../../love/public/src/js_visit_calls_named.mjs";
export async function js_statement_find_call_named(ast, f_name) {
  let unaliased = await function_name_unalias_only(f_name);
  log(js_statement_find_call_named.name, {
    unaliased,
  });
  function lambda(la) {
    js_visit_calls_named(ast, unaliased, la);
  }
  let only = list_adder_single(lambda);
  return only;
}
