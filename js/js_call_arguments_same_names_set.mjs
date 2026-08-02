import { js_selects_call_get } from "./js_selects_call_get.mjs";
import { function_params_names } from "./function_params_names.mjs";
import { js_call_argument_named_identifier_set } from "./js_call_argument_named_identifier_set.mjs";
import { list_intersect } from "./list_intersect.mjs";
import { js_binding_names } from "./js_binding_names.mjs";
import { js_call_callee_name_try } from "./js_call_callee_name_try.mjs";
export async function js_call_arguments_same_names_set(ast, selects) {
  "Points every argument of a chosen call at the binding of the same name where this function has one";
  "A call written from a function own parameter names arrives with every colliding name uniquified so the caller has to point each one back at what it meant";
  let call = js_selects_call_get(selects);
  let f_name = js_call_callee_name_try(call);
  let names_param = await function_params_names(f_name);
  let names_bound = js_binding_names(ast);
  let names_shared = list_intersect(names_param, names_bound);
  for (let param_name of names_shared) {
    await js_call_argument_named_identifier_set(
      ast,
      selects,
      param_name,
      param_name,
    );
  }
}
