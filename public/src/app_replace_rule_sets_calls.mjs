import { function_ast_fn } from "../../../love/public/src/function_ast_fn.mjs";
import { js_list_calls_names } from "../../../love/public/src/js_list_calls_names.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { app_replace_rule_sets_v_1 } from "../../../love/public/src/app_replace_rule_sets_v_1.mjs";
export async function app_replace_rule_sets_calls() {
  let fn = app_replace_rule_sets_v_1;
  let ast = await function_ast_fn(fn);
  let names = js_list_calls_names(ast);
  log({
    names,
  });
}
