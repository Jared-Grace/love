import { app_replace_rule_sets } from "../../../love/public/src/app_replace_rule_sets.mjs";
import { js_flo_body_empty_return_identifiers_curried_right } from "../../../love/public/src/js_flo_body_empty_return_identifiers_curried_right.mjs";
import { function_transform_fn } from "../../../love/public/src/function_transform_fn.mjs";
import { function_ast_fn } from "../../../love/public/src/function_ast_fn.mjs";
import { js_list_calls_names } from "../../../love/public/src/js_list_calls_names.mjs";
import { app_replace_rule_sets_v_1 } from "../../../love/public/src/app_replace_rule_sets_v_1.mjs";
export async function app_replace_rule_sets_calls() {
  let ast = await function_ast_fn(app_replace_rule_sets_v_1);
  let names = js_list_calls_names(ast);
  let r2 = js_flo_body_empty_return_identifiers_curried_right(names);
  let output = await function_transform_fn(app_replace_rule_sets, r2);
}
