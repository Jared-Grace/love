import { function_params_new } from "../../../love/public/src/function_params_new.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { function_transform_current } from "../../../love/public/src/function_transform_current.mjs";
import { list_swap } from "../../../love/public/src/list_swap.mjs";
import { js_declaration_param_named } from "../../../love/public/src/js_declaration_param_named.mjs";
import { js_declaration_single } from "../../../love/public/src/js_declaration_single.mjs";
import { error } from "./error.mjs";
export async function function_param_swap(param_name_a, param_name_b) {
  error(
    "TODO: finish this; consider similar code in " + function_params_new.name,
  );
  marker("1");
  await function_transform_current(lambda);
  function lambda(ast) {
    let declaration = js_declaration_single(ast);
    let a = js_declaration_param_named(declaration, param_name_a);
    let b = js_declaration_param_named(declaration, param_name_b);
    let { params } = declaration;
    list_swap(params, a, b);
  }
}
