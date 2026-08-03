import { function_new_transform } from "./function_new_transform.mjs";
import { js_flo_params_add } from "./js_flo_params_add.mjs";
export async function function_new_js_inner(combined) {
  await function_new_transform(combined, lambda);
  async function lambda(ast) {
    js_flo_params_add(ast, ["ast"]);
  }
}
