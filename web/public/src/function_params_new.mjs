import { function_transform_current } from "./function_transform_current.mjs";
import { js_declaration_single_params_add } from "./js_declaration_single_params_add.mjs";
import { string_split } from "./string_split.mjs";
export async function function_params_new(param_names_comma) {
  let param_names = string_split(param_names_comma, ",");
  await function_transform_current(lambda);
  function lambda(ast) {
    js_declaration_single_params_add(ast, param_names);
  }
}
