import { js_function_declaration_params_get } from "./js_function_declaration_params_get.mjs";
import { js_flo } from "./js_flo.mjs";
export function js_flo_params_get(ast) {
  let declaration = js_flo(ast);
  let params = js_function_declaration_params_get(declaration);
  return params;
}
