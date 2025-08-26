import { function_new_js_name } from "./function_new_js_name.mjs";
import { js_declaration_single_params_add } from "./js_declaration_single_params_add.mjs";
import { function_transform } from "./function_transform.mjs";
import { marker } from "./marker.mjs";
import { function_new } from "./function_new.mjs";
export async function function_new_js(f_name_unprefixed) {
  let combined = function_new_js_name(f_name_unprefixed);
  await function_new(combined);
  async function lambda(ast) {
    marker("1");
    js_declaration_single_params_add(ast, ["ast"]);
  }
  let result = await function_transform(combined, lambda);
}
