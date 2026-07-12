import { js_call_named_find } from "./js_call_named_find.mjs";
import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
import { function_params_get } from "./function_params_get.mjs";
import { each_pair } from "./each_pair.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
import { js_identifier_name } from "./js_identifier_name.mjs";
import { equal } from "./equal.mjs";
import { js_identifier_unique_ast } from "./js_identifier_unique_ast.mjs";
import { js_identifier_rename } from "./js_identifier_rename.mjs";
export async function js_call_named_args_rename_to_params(ast, f_name) {
  let call = js_call_named_find(ast, f_name);
  let args = js_call_arguments_get(call);
  let params = await function_params_get(f_name);
  function lambda(arg, param) {
    if (!js_identifier_is(arg)) {
      return;
    }
    if (!js_identifier_is(param)) {
      return;
    }
    let name_from = js_identifier_name(arg);
    let param_name = js_identifier_name(param);
    if (equal(name_from, param_name)) {
      return;
    }
    let name_to = js_identifier_unique_ast(ast, param_name);
    js_identifier_rename(ast, name_from, name_to);
  }
  each_pair(args, params, lambda);
}
