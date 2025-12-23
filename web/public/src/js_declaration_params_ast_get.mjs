import { js_declaration_params_get } from "../../../love/public/src/js_declaration_params_get.mjs";
import { js_declaration_single } from "../../../love/public/src/js_declaration_single.mjs";
export function js_declaration_params_ast_get(ast) {
  let declaration = js_declaration_single(ast);
  let params = js_declaration_params_get(declaration);
  let r = {
    declaration,
    params,
  };
  return r;
}
