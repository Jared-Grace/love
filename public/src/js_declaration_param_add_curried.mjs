import { js_declaration_param_add } from "../../../love/public/src/js_declaration_param_add.mjs";
export function js_declaration_param_add_curried(declaration) {
  function js_declaration_param_add_curried_result(param_name) {
    let r = js_declaration_param_add(declaration, param_name);
    return r;
  }
  return js_declaration_param_add_curried_result;
}
