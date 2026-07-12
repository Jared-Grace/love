import { list_size_1_assert } from "./list_size_1_assert.mjs";
import { js_function_declaration_params_names } from "./js_function_declaration_params_names.mjs";
import { property_get } from "./property_get.mjs";
import { function_parse_declaration_unaliased } from "./function_parse_declaration_unaliased.mjs";
import { js_imports_missing_add_all } from "./js_imports_missing_add_all.mjs";
import { js_flo_param_add } from "./js_flo_param_add.mjs";
import { js_call_statement } from "./js_call_statement.mjs";
import { js_flo_body_add } from "./js_flo_body_add.mjs";
import { each } from "./each.mjs";
import { function_new_open_transform } from "./function_new_open_transform.mjs";
import { function_name_combine } from "./function_name_combine.mjs";
export async function function_multiplize(f_name) {
  let u = await function_parse_declaration_unaliased(f_name);
  let declaration_call = property_get(u, "declaration");
  let arg_names = js_function_declaration_params_names(declaration_call);
  list_size_1_assert(arg_names);
  let combined = function_name_combine(f_name, "multiple");
  async function lambda(ast) {
    let list = "list";
    let call = js_call_statement(each.name, [list, f_name]);
    js_flo_body_add(ast, call);
    js_flo_param_add(ast, list);
    await js_imports_missing_add_all(ast);
  }
  let output = await function_new_open_transform(combined, lambda);
  return combined;
}
