import { function_transform_current } from "./function_transform_current.mjs";
import { js_declaration_single_params_add } from "./js_declaration_single_params_add.mjs";
import { string_split } from "./string_split.mjs";
import { js_declaration_param_add } from "./js_declaration_param_add.mjs";
import { js_declaration_single } from "./js_declaration_single.mjs";
import { function_transform } from "./function_transform.mjs";
import { data_function_current_get } from "./data_function_current_get.mjs";
import { function_param_new } from "./function_param_new.mjs";
import { each } from "./each.mjs";
export async function function_params_new(param_names_comma) {
  let param_names = string_split(param_names_comma, ",");
  await function_transform_current(lambda);
  function lambda(ast) {
    js_declaration_single_params_add(ast, param_names);
  }
}
