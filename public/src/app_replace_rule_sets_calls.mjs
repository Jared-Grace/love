import { error } from "../../../love/public/src/error.mjs";
import { js_function_declaration_single_block_body_empty_return_identifiers_curried_right } from "../../../love/public/src/js_function_declaration_single_block_body_empty_return_identifiers_curried_right.mjs";
import { js_function_declaration_single_block_body_empty_return_identifiers } from "../../../love/public/src/js_function_declaration_single_block_body_empty_return_identifiers.mjs";
import { function_transform_fn } from "../../../love/public/src/function_transform_fn.mjs";
import { function_ast_fn } from "../../../love/public/src/function_ast_fn.mjs";
import { js_list_calls_names } from "../../../love/public/src/js_list_calls_names.mjs";
import { app_replace_rule_sets_v_1 } from "../../../love/public/src/app_replace_rule_sets_v_1.mjs";
export async function app_replace_rule_sets_calls() {
  let ast2 = await function_ast_fn(app_replace_rule_sets_v_1);
  let names = js_list_calls_names(ast2);
  let r22 =
    js_function_declaration_single_block_body_empty_return_identifiers_curried_right(
      names2,
    );
  async function lambda(ast) {
    js_function_declaration_single_block_body_empty_return_identifiers(
      ast,
      names,
    );
  }
  let fn = error();
  let output = await function_transform_fn(fn, r2);
}
