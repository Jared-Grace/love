import { js_function_declaration_params_add } from "../../../love/public/src/js_function_declaration_params_add.mjs";
import { js_flo } from "../../../love/public/src/js_flo.mjs";
export function js_flo_params_add(ast, param_names) {
  let declaration = js_flo(ast);
  js_function_declaration_params_add(declaration, param_names);
  return declaration;
}
