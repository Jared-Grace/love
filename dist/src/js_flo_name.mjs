import { js_function_declaration_name } from "../../../love/public/src/js_function_declaration_name.mjs";
import { js_flo } from "../../../love/public/src/js_flo.mjs";
export function js_flo_name(ast) {
  let declaration = js_flo(ast);
  let name = js_function_declaration_name(declaration);
  return name;
}
