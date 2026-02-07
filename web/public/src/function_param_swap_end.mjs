import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { js_declaration_params_ast_get } from "../../../love/public/src/js_declaration_params_ast_get.mjs";
import { list_swap_at } from "../../../love/public/src/list_swap_at.mjs";
import { function_params_new_generic } from "../../../love/public/src/function_params_new_generic.mjs";
export async function function_param_swap_end(f_name) {
  await function_params_new_generic(
    function_transform_current_lambda,
    on_call,
    f_name,
  );
  function on_call(args) {
    let index_a = 0;
    let index_b = 1;
    list_swap_at(args, index_a, index_b);
  }
  function function_transform_current_lambda(ast) {
    let index_a = 0;
    let index_b = 1;
    let v2 = js_declaration_params_ast_get(ast);
    let params = object_property_get(v2, "params");
    list_swap_at(params, index_a, index_b);
  }
}
