import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { js_flo_params_add } from "../../../love/public/src/js_flo_params_add.mjs";
import { function_new } from "../../../love/public/src/function_new.mjs";
export async function function_new_js_inner(combined) {
  await function_new(combined);
  async function lambda(ast) {
    js_flo_params_add(ast, ["ast"]);
  }
  let result = await function_transform(combined, lambda);
}
