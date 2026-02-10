import { js_declaration_param_add_curry } from "../../../love/public/src/js_declaration_param_add_curry.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function js_declaration_params_add(declaration, param_names) {
  let a = js_declaration_param_add_curry(declaration);
  each(param_names, a);
}
