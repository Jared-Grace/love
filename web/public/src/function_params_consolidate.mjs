import { js_declaration_single } from "./js_declaration_single.mjs";
import { function_transform } from "./function_transform.mjs";
export async function function_params_consolidate() {
  async function lambda(ast) {
    let declaration = js_declaration_single(ast);
  }
  let result = await function_transform(f_name, lambda);
}
