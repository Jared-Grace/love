import { js_function_declaration_params_add } from "../../../love/public/src/js_function_declaration_params_add.mjs";
import { js_function_declaration_single } from "../../../love/public/src/js_function_declaration_single.mjs";
export function js_function_declaration_single_params_add(ast, param_names) {
  let declaration = js_function_declaration_single(ast);
  js_function_declaration_params_add(declaration, param_names);
  return declaration;
}
