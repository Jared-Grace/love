import { app_replace_rule_sets_functionize_name } from "../../../love/public/src/app_replace_rule_sets_functionize_name.mjs";
import { js_call_statement } from "../../../love/public/src/js_call_statement.mjs";
import { function_new_declaration_from } from "../../../love/public/src/function_new_declaration_from.mjs";
import { js_return_argument_set } from "../../../love/public/src/js_return_argument_set.mjs";
import { log_unparse } from "../../../love/public/src/log_unparse.mjs";
import { js_statement_return_empty_add } from "../../../love/public/src/js_statement_return_empty_add.mjs";
import { js_function_declaration_to_block_body } from "../../../love/public/src/js_function_declaration_to_block_body.mjs";
import { function_new_declaration_to } from "../../../love/public/src/function_new_declaration_to.mjs";
import { marker_next_declare_single_init_elements } from "../../../love/public/src/marker_next_declare_single_init_elements.mjs";
import { function_transform_marker_specified } from "../../../love/public/src/function_transform_marker_specified.mjs";
import { app_replace_rule_sets } from "../../../love/public/src/app_replace_rule_sets.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
export async function app_replace_rule_sets_functionize() {
  let f_name = app_replace_rule_sets.name;
  let code = await function_transform_marker_specified(f_name, "rules", lambda);
  async function lambda(a) {
    let elements = marker_next_declare_single_init_elements(a);
    async function lambda2(e) {
      let f_name_new = app_replace_rule_sets_functionize_name(e);
      let declaration = function_new_declaration_to(f_name_new);
      let body_block = js_function_declaration_to_block_body(declaration);
      let r = js_statement_return_empty_add(body_block);
      js_return_argument_set(r, e);
      log_unparse(declaration);
      return declaration;
      await function_new_declaration_from(declaration);
    }
    await each_async(elements, lambda2);
    async function lambda2(e) {
      let f_name_new = app_replace_rule_sets_functionize_name(e);
      let parsed = js_call_statement(f_name_new, []);
      log_unparse(parsed);
      return;
    }
    await each_async(elements, lambda2);
  }
  return;
}
