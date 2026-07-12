import { js_function_declaration_param_add_curried } from "./js_function_declaration_param_add_curried.mjs";
import { each } from "./each.mjs";
export function js_function_declaration_params_add(declaration, param_names) {
  let a = js_function_declaration_param_add_curried(declaration);
  each(param_names, a);
}
