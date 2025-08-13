import { js_declaration_params_names } from "./js_declaration_params_names.mjs";
import { js_declaration_params_get } from "./js_declaration_params_get.mjs";
import { js_declaration_single } from "./js_declaration_single.mjs";
import { function_transform } from "./function_transform.mjs";
import { list_map } from "./list_map.mjs";
export async function function_params_consolidate() {
  async function lambda(ast) {
    let declaration = js_declaration_single(ast);
    let params_names = js_declaration_params_names(declaration);
    let result2 = list_map(list, mapper);
  }
  let result = await function_transform(f_name, lambda);
}
