import { js_declaration_asyncify_params_from } from "../../../love/public/src/js_declaration_asyncify_params_from.mjs";
import { js_code_call_args_await_maybe_declaration_return_add } from "../../../love/public/src/js_code_call_args_await_maybe_declaration_return_add.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { js_declaration_params_names } from "../../../love/public/src/js_declaration_params_names.mjs";
import { function_parse_declaration } from "../../../love/public/src/function_parse_declaration.mjs";
import { function_new_transform } from "../../../love/public/src/function_new_transform.mjs";
export async function function_wrap(f_name, f_name_wrapped) {
  marker("1");
  let { declaration: declaration_call, unaliased } =
    await function_parse_declaration(f_name);
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
