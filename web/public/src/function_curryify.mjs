import { function_parse_declaration_unaliased } from "../../../love/public/src/function_parse_declaration_unaliased.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_declaration_asyncify_params_from } from "../../../love/public/src/js_declaration_asyncify_params_from.mjs";
import { js_code_call_args_await_maybe_declaration_return_add } from "../../../love/public/src/js_code_call_args_await_maybe_declaration_return_add.mjs";
import { js_declaration_params_names } from "../../../love/public/src/js_declaration_params_names.mjs";
import { function_new_transform } from "../../../love/public/src/function_new_transform.mjs";
export async function function_curryify(f_name) {
  let r = await function_parse_declaration_unaliased(f_name);
  let unaliased = property_get(r, "unaliased");
  let declaration_call = property_get(r, "declaration");
  let v = await function_new_transform(f_name_wrapped, lambda);
  return v;
  async function lambda(ast) {
    let arg_names = js_declaration_params_names(declaration_call);
    js_code_call_args_await_maybe_declaration_return_add(
      unaliased,
      arg_names,
      declaration_call,
      ast,
    );
    await js_declaration_asyncify_params_from(ast, declaration_call);
  }
}
