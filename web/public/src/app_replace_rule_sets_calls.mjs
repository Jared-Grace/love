import { js_expression_array } from "../../../love/public/src/js_expression_array.mjs";
import { js_statement_return_empty_add } from "../../../love/public/src/js_statement_return_empty_add.mjs";
import { list_empty } from "../../../love/public/src/list_empty.mjs";
import { js_function_declaration_single_block_body } from "../../../love/public/src/js_function_declaration_single_block_body.mjs";
import { function_transform_fn } from "../../../love/public/src/function_transform_fn.mjs";
import { function_ast_fn } from "../../../love/public/src/function_ast_fn.mjs";
import { js_list_calls_names } from "../../../love/public/src/js_list_calls_names.mjs";
import { app_replace_rule_sets_v_1 } from "../../../love/public/src/app_replace_rule_sets_v_1.mjs";
export async function app_replace_rule_sets_calls() {
  let ast2 = await function_ast_fn(app_replace_rule_sets_v_1);
  let names = js_list_calls_names(ast2);
  async function lambda(ast) {
    let body_block = js_function_declaration_single_block_body(ast);
    list_empty(body_block);
    let r = js_statement_return_empty_add(body_block);
    let expression = js_expression_array(elements);
  }
  let output = await function_transform_fn(lambda);
}
