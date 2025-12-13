import { js_code_call_args_await_maybe } from "../../../love/public/src/js_code_call_args_await_maybe.mjs";
import { function_parse_declaration } from "../../../love/public/src/function_parse_declaration.mjs";
import { function_new_transform } from "../../../love/public/src/function_new_transform.mjs";
import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { invoke_cache_file } from "./invoke_cache_file.mjs";
export async function function_cache(f_name) {
  marker("1");
  let { declaration: declaration_cache, unaliased } =
    await function_parse_declaration(f_name);
  let { declaration: declaration_call } = await function_parse_declaration(
    invoke_cache_file.name,
  );
  let f_name_cache = function_name_combine(unaliased, "cache");
  async function lambda(ast) {
    let return_argument_code = js_code_call_args_await_maybe(
      unaliased,
      arg_names,
      declaration_call,
    );
  }
  let v = await function_new_transform(f_name_cache, lambda);
}
