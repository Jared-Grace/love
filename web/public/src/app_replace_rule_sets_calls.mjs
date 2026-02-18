import { js_function_declaration_single_block_body } from "../../../love/public/src/js_function_declaration_single_block_body.mjs";
import { function_transform_fn } from "../../../love/public/src/function_transform_fn.mjs";
import { function_ast_fn } from "../../../love/public/src/function_ast_fn.mjs";
import { js_list_calls_names } from "../../../love/public/src/js_list_calls_names.mjs";
import { app_replace_rule_sets_v_1 } from "../../../love/public/src/app_replace_rule_sets_v_1.mjs";
export async function app_replace_rule_sets_calls() {
  let ast = await function_ast_fn(app_replace_rule_sets_v_1);
  let names = js_list_calls_names(ast);
  async function lambda(ast2) {
    let body_block = js_function_declaration_single_block_body(ast3);
  }
  let output = await function_transform_fn(lambda);
}
