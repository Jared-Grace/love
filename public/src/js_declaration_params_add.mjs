import { js_declaration_param_add_curried } from "../../../love/public/src/js_declaration_param_add_curried.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { js_declaration_param_add } from "../../../love/public/src/js_declaration_param_add.mjs";
export function js_declaration_params_add(declaration, param_names) {
  function lambda2(param_name) {
    js_declaration_param_add(declaration, param_name);
  }
  let r2 = js_declaration_param_add_curried(declaration2);
  each(param_names, lambda2);
}
