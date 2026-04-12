import { function_new_transform_open } from "../../../love/public/src/function_new_transform_open.mjs";
import { js_flo_params_add } from "../../../love/public/src/js_flo_params_add.mjs";
export async function function_new_js_inner(combined) {
  let result = await function_new_transform_open(combined, lambda);
  async function lambda(ast) {
    js_flo_params_add(ast, ["ast"]);
  }
}
