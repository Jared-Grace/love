import { log } from "../../../love/public/src/log.mjs";
import { list_swap_at } from "../../../love/public/src/list_swap_at.mjs";
import { function_param_index } from "../../../love/public/src/function_param_index.mjs";
import { function_params_new_generic } from "../../../love/public/src/function_params_new_generic.mjs";
import { function_params_new } from "../../../love/public/src/function_params_new.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { function_transform_current } from "../../../love/public/src/function_transform_current.mjs";
import { list_swap } from "../../../love/public/src/list_swap.mjs";
import { js_declaration_param_named } from "../../../love/public/src/js_declaration_param_named.mjs";
import { js_declaration_single } from "../../../love/public/src/js_declaration_single.mjs";
import { error } from "./error.mjs";
export async function function_param_swap(param_name_a, param_name_b) {
  if (false) {
    error(
      "TODO: finish this; consider similar code in " + function_params_new.name,
    );
    await function_transform_current(lambda);
    function lambda(ast) {
      let declaration = js_declaration_single(ast);
      let a = js_declaration_param_named(declaration, param_name_a);
      let b = js_declaration_param_named(declaration, param_name_b);
      let { params } = declaration;
      list_swap(params, a, b);
    }
    marker("1");
  }
  let index_a = null;
  let index_b = null;
  await function_params_new_generic(function_transform_current_lambda, on_call);
  function on_call(args) {
    list_swap_at(args, index_a, index_b);
  }
  function function_transform_current_lambda(ast) {
    let params = null;
    log({param_name_a});
    ({ params, index_a } = function_param_index(ast, param_name_a));
    ({ index_b } = function_param_index(ast, param_name_b));
    list_swap_at(params, index_a, index_b);
  }
}
