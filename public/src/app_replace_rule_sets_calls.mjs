import { js_list_calls_names } from "../../../love/public/src/js_list_calls_names.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { app_replace_rule_sets_v_1 } from "../../../love/public/src/app_replace_rule_sets_v_1.mjs";
import { function_ast } from "../../../love/public/src/function_ast.mjs";
export async function app_replace_rule_sets_calls() {
  let ast = await function_ast(app_replace_rule_sets_v_1.name);
  let names = js_list_calls_names(ast);
  log({
    names,
  });
}
