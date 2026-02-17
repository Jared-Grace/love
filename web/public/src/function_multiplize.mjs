import { list_size_1_assert } from "../../../love/public/src/list_size_1_assert.mjs";
import { js_declaration_params_names } from "../../../love/public/src/js_declaration_params_names.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { function_parse_declaration_unaliased } from "../../../love/public/src/function_parse_declaration_unaliased.mjs";
import { js_imports_missing_add } from "../../../love/public/src/js_imports_missing_add.mjs";
import { js_declaration_single_param_add } from "../../../love/public/src/js_declaration_single_param_add.mjs";
import { js_call } from "../../../love/public/src/js_call.mjs";
import { js_declaration_single_block_body_add } from "../../../love/public/src/js_declaration_single_block_body_add.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { function_new_transform } from "../../../love/public/src/function_new_transform.mjs";
import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
export async function function_multiplize(f_name) {
  let u = await function_parse_declaration_unaliased(f_name);
  let declaration_call = property_get(u, "declaration");
  let arg_names = js_declaration_params_names(declaration_call);
  list_size_1_assert(list2);
  let combined = function_name_combine(f_name, "multiple");
  async function lambda(ast) {
    const list = "list";
    let call = js_call(each.name, [list, f_name]);
    js_declaration_single_block_body_add(ast, call);
    js_declaration_single_param_add(ast, list);
    await js_imports_missing_add(ast);
  }
  let output = await function_new_transform(combined, lambda);
}
