import { function_transform_fn } from "../../../love/public/src/function_transform_fn.mjs";
import { function_delete_if_exists } from "../../../love/public/src/function_delete_if_exists.mjs";
import { function_ast_fn } from "../../../love/public/src/function_ast_fn.mjs";
import { js_list_calls_names } from "../../../love/public/src/js_list_calls_names.mjs";
import { app_replace_rule_sets_v_1 } from "../../../love/public/src/app_replace_rule_sets_v_1.mjs";
import { fn_name } from "./fn_name.mjs";
export async function app_replace_rule_sets_calls() {
  let ast = await function_ast_fn(app_replace_rule_sets_v_1);
  let names = js_list_calls_names(ast);
  let f_name = fn_name("app_replace_rule_sets");
  await function_delete_if_exists(f_name);
  async function lambda(ast2) {}
  let output = await function_transform_fn(lambda);
}
