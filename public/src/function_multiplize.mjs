import { js_declaration_single_block_body_add } from "../../../love/public/src/js_declaration_single_block_body_add.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { js_call_insert } from "../../../love/public/src/js_call_insert.mjs";
import { function_new_transform } from "../../../love/public/src/function_new_transform.mjs";
import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
export async function function_multiplize(f_name) {
  let combined = function_name_combine(f_name, "multiple");
  async function lambda(ast) {
    js_call_insert(each.name, ["list", f_name], list, index);
    js_declaration_single_block_body_add(ast2, item);
  }
  let output = await function_new_transform(combined, lambda);
}
