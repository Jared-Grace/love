import { js_function_declaration_name } from "../../../love/public/src/js_function_declaration_name.mjs";
import { js_function_declaration_single } from "../../../love/public/src/js_function_declaration_single.mjs";
export function js_declaration_single_name(ast) {
  let declaration = js_function_declaration_single(ast);
  let name = js_function_declaration_name(declaration);
  return name;
}
