import { js_imports_missing_add } from "../../../love/public/src/js_imports_missing_add.mjs";
import { js_declaration_single_param_add } from "../../../love/public/src/js_declaration_single_param_add.mjs";
import { js_call } from "../../../love/public/src/js_call.mjs";
import { js_declaration_single_block_body_add } from "../../../love/public/src/js_declaration_single_block_body_add.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { function_new_transform } from "../../../love/public/src/function_new_transform.mjs";
import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
export async function function_multiplize(f_name) {
  let combined = function_name_combine(f_name, "multiple");
  async function lambda(ast) {
    const list = "list";
    let call = js_call(each.name, [list, f_name]);
    js_declaration_single_block_body_add(ast, call);
    js_declaration_single_param_add(ast, list);
    await js_imports_missing_add(ast2);
  }
  let output = await function_new_transform(combined, lambda);
}
