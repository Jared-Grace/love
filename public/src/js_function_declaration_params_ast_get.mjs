import { js_function_declaration_params_get } from "../../../love/public/src/js_function_declaration_params_get.mjs";
import { js_flo } from "../../../love/public/src/js_flo.mjs";
export function js_function_declaration_params_ast_get(ast) {
  let declaration = js_flo(ast);
  let params = js_function_declaration_params_get(declaration);
  let r = {
    declaration,
    params,
  };
  return r;
}
