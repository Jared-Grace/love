import { js_code_call_args_await_maybe_declaration_return_add } from "../../../love/public/src/js_code_call_args_await_maybe_declaration_return_add.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
import { js_declaration_params_names } from "../../../love/public/src/js_declaration_params_names.mjs";
import { js_code_call_args_await_maybe } from "../../../love/public/src/js_code_call_args_await_maybe.mjs";
import { function_parse_declaration } from "../../../love/public/src/function_parse_declaration.mjs";
import { function_new_transform } from "../../../love/public/src/function_new_transform.mjs";
import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { invoke_cache_file } from "./invoke_cache_file.mjs";
export async function function_cache(f_name) {
  marker("1");
  let { declaration: declaration_call, unaliased } =
    await function_parse_declaration(f_name);
  const c = invoke_cache_file.name;
  let { declaration: declaration_cache } = await function_parse_declaration(c);
  let f_name_cache = function_name_combine(unaliased, "cache");
  async function lambda(ast) {
    let arg_names = js_declaration_params_names(declaration_call);
    let arg_names_code = json_to(arg_names);
    let return_argument_code = js_code_call_args_await_maybe(
      c,
      [unaliased, arg_names_code],
      declaration_cache,
    );
    js_code_call_args_await_maybe_declaration_return_add(
      unaliased,
      arg_names,
      declaration_call,
      ast,
    );
  }
  let v = await function_new_transform(f_name_cache, lambda);
}
