import { function_ast } from "../../../love/public/src/function_ast.mjs";
import { function_current_get } from "../../../love/public/src/function_current_get.mjs";
export async function function_current_ast() {
  let f_name_current = await function_current_get();
  let ast = await function_ast(f_name_current);
  return ast;
}
