import { list_swap } from "./list_swap.mjs";
import { js_declaration_param_named } from "./js_declaration_param_named.mjs";
import { js_declaration_single } from "./js_declaration_single.mjs";
import { function_transform } from "./function_transform.mjs";
export async function function_param_swap(f_name, param_name_a, param_name_b) {
  let a_index = null;
  let b_index = null;
  await function_transform(f_name, lambda);
  function lambda(ast) {
    let declaration = js_declaration_single(ast);
    let a = js_declaration_param_named(declaration, param_name_a);
    let b = js_declaration_param_named(declaration, param_name_b);
    let { params } = declaration;
    list_swap(params, a, b);
  }
}
