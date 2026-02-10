import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_to } from "../../../love/public/src/list_to.mjs";
import { list_size_1_assert } from "../../../love/public/src/list_size_1_assert.mjs";
import { js_auto } from "../../../love/public/src/js_auto.mjs";
import { functions_combine_name } from "../../../love/public/src/functions_combine_name.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { js_declaration_single_block_body } from "../../../love/public/src/js_declaration_single_block_body.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { function_new_transform } from "../../../love/public/src/function_new_transform.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
export async function functions_combine(f_names_comma) {
  let list = list_to(arguments);
  list_size_1_assert(list);
  let v = await functions_combine_name(f_names_comma);
  let combined = property_get(v, "combined");
  let f_names = property_get(v, "f_names");
  async function lambda2(ast) {
    let body_block = js_declaration_single_block_body(ast);
    async function lambda(f_name) {
      let item = js_parse_expression(f_name);
      list_add(body_block, item);
    }
    await each_async(f_names, lambda);
    await js_auto(ast);
  }
  await function_new_transform(combined, lambda2);
}
