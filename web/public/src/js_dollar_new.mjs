import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { js_dollar_new_update_list } from "../../../love/public/src/js_dollar_new_update_list.mjs";
import { js_declaration_single_block_body_add_return } from "../../../love/public/src/js_declaration_single_block_body_add_return.mjs";
import { js_dollar_new_args_inner } from "../../../love/public/src/js_dollar_new_args_inner.mjs";
import { js_dollar_new_name } from "../../../love/public/src/js_dollar_new_name.mjs";
import { function_new } from "../../../love/public/src/function_new.mjs";
export async function js_dollar_new(code) {
  let combined = js_dollar_new_name(code);
  await function_new(combined);
  async function lambda2(ast) {
    js_declaration_single_block_body_add_return(ast);
    await js_dollar_new_args_inner(ast);
  }
  await function_transform(combined, lambda2);
  let code2 = await js_dollar_new_update_list(lambda2, code);
  return code2;
}
