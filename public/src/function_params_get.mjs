import { js_flo_params_get } from "../../../love/public/src/js_flo_params_get.mjs";
import { function_ast } from "../../../love/public/src/function_ast.mjs";
export async function function_params_get(unaliased) {
  let ast = await function_ast(unaliased);
  let params = js_flo_params_get(ast);
  return params;
}
