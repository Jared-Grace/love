import { list_to } from "./list_to.mjs";
import { list_size_1_assert } from "./list_size_1_assert.mjs";
import { js_auto } from "./js_auto.mjs";
import { functions_combine_name } from "./functions_combine_name.mjs";
import { list_add } from "./list_add.mjs";
import { js_declaration_single_block_blody } from "./js_declaration_single_block_blody.mjs";
import { each_async } from "./each_async.mjs";
import { function_new_transform } from "./function_new_transform.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
export async function functions_combine(f_names_comma) {
  let list = list_to(arguments);
  list_size_1_assert(list);
  let { f_names, combined } = await functions_combine_name(f_names_comma);
  async function lambda2(ast) {
    let body_block = js_declaration_single_block_blody(ast);
    async function lambda(f_name) {
      let item = js_parse_expression(f_name);
      list_add(body_block, item);
    }
    await each_async(f_names, lambda);
    await js_auto(ast);
  }
  await function_new_transform(combined, lambda2);
}
