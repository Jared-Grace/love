import { js_function_declaration_params_get } from "../../../love/public/src/js_function_declaration_params_get.mjs";
import { js_flo } from "../../../love/public/src/js_flo.mjs";
export function js_flo_params_get(ast) {
  let declaration2 = js_flo(ast);
  let params = js_function_declaration_params_get(declaration2);
  return params;
}
