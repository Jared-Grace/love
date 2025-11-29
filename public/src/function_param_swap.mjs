import { list_swap } from "../../../love/public/src/list_swap.mjs";
import { js_declaration_param_named } from "../../../love/public/src/js_declaration_param_named.mjs";
import { js_declaration_single } from "../../../love/public/src/js_declaration_single.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
export async function function_param_swap(f_name, param_name_a, param_name_b) {
  await function_transform(f_name, lambda);
  function lambda(ast) {
    let declaration = js_declaration_single(ast);
    let a = js_declaration_param_named(declaration, param_name_a);
    let b = js_declaration_param_named(declaration, param_name_b);
    let { params } = declaration;
    list_swap(params, a, b);
  }
}
