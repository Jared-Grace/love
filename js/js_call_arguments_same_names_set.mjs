import { js_function_declaration_property_params_names } from "./js_function_declaration_property_params_names.mjs";
import { js_call_argument_named_identifier_set } from "./js_call_argument_named_identifier_set.mjs";
import { list_intersect } from "./list_intersect.mjs";
import { js_binding_names } from "./js_binding_names.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { js_call_callee_name_try } from "./js_call_callee_name_try.mjs";
import { js_node_call_get } from "./js_node_call_get.mjs";
import { list_single } from "./list_single.mjs";
export async function js_call_arguments_same_names_set(ast, selects) {
  "Points every argument of a chosen call at the binding of the same name where this function has one";
  "A call written from a function own parameter names arrives with every colliding name uniquified so the caller has to point each one back at what it meant";
  let node = list_single(selects);
  let call = js_node_call_get(node);
  let f_name = js_call_callee_name_try(call);
  let d = await function_parse_declaration(f_name);
  let names_param = js_function_declaration_property_params_names(
    d,
    "declaration",
  );
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
