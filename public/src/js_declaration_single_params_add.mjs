import { js_declaration_params_add } from "../../../love/public/src/js_declaration_params_add.mjs";
import { js_declaration_single } from "../../../love/public/src/js_declaration_single.mjs";
export function js_declaration_single_params_add(ast, param_names) {
  let declaration = js_declaration_single(ast);
  js_declaration_params_add(declaration, param_names);
  return declaration;
}
