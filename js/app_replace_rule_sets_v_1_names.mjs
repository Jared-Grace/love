import { js_list_calls_names } from "./js_list_calls_names.mjs";
import { app_replace_rule_sets_v_1 } from "./app_replace_rule_sets_v_1.mjs";
import { function_ast_fn } from "./function_ast_fn.mjs";
export async function app_replace_rule_sets_v_1_names() {
  "Which rule sets the first version of the replace app taught, read out of what that function calls rather than from a list kept beside it.";
  let ast = await function_ast_fn(app_replace_rule_sets_v_1);
  let names = js_list_calls_names(ast);
  return names;
}
