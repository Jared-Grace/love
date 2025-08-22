import { js_declaration_param_add } from "./js_declaration_param_add.mjs";
import { each } from "./each.mjs";
import { js_declaration_single } from "./js_declaration_single.mjs";
export function js_declaration_single_params_add(ast, param_names) {
  let declaration = js_declaration_single(ast);
  function lambda(param_name) {
    let v = js_declaration_param_add(declaration, param_name);
    return v;
  }
  each(param_names, lambda);
}
