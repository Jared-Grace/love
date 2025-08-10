import { js_code_call_args_await_maybe } from "./js_code_call_args_await_maybe.mjs";
import { js_declaration_params_names } from "./js_declaration_params_names.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { function_new_transform } from "./function_new_transform.mjs";
import { function_transform } from "./function_transform.mjs";
import { marker } from "./marker.mjs";
import { function_new } from "./function_new.mjs";
export async function function_wrap(f_name, f_name_wrapped) {
  let { declaration, unaliased } =
    await function_parse_declaration(f_name_call);
  await function_new_transform(f_name_wrapped, lambda);
  async function lambda(ast) {
    let arg_names = js_declaration_params_names(declaration);
    let code = js_code_call_args_await_maybe(unaliased, args_code, declaration);
  }
}
