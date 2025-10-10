import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { js_declaration_single_params_add } from "../../../love/public/src/js_declaration_single_params_add.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { function_new } from "../../../love/public/src/function_new.mjs";
export async function function_new_js_inner(combined) {
  await function_new(combined);
  async function lambda(ast) {
    marker("1");
    js_declaration_single_params_add(ast, ["ast"]);
  }
  let result = await function_transform(combined, lambda);
}
