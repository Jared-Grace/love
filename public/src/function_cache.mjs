import { list_map } from "../../../love/public/src/list_map.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { function_run } from "../../../love/public/src/function_run.mjs";
import { list_empty_is } from "../../../love/public/src/list_empty_is.mjs";
import { js_declaration_asyncify_params_from } from "../../../love/public/src/js_declaration_asyncify_params_from.mjs";
import { js_code_call_args_await_maybe_declaration_return_add } from "../../../love/public/src/js_code_call_args_await_maybe_declaration_return_add.mjs";
import { js_declaration_params_names } from "../../../love/public/src/js_declaration_params_names.mjs";
import { function_parse_declaration } from "../../../love/public/src/function_parse_declaration.mjs";
import { function_new_transform } from "../../../love/public/src/function_new_transform.mjs";
import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { invoke_cache_file } from "./invoke_cache_file.mjs";
export async function function_cache(f_name) {
  marker("1");
  let args_none = false;
  let v3 = await function_parse_declaration(f_name);
  let unaliased = object_property_get(v3, "unaliased");
  let declaration_call = object_property_get(v3, "declaration");
  const c = invoke_cache_file.name;
  let v4 = await function_parse_declaration(c);
  let declaration_cache = object_property_get(v4, "declaration");
  let f_name_cache = function_name_combine(unaliased, "cache");
  async function lambda(ast) {
    let arg_names = js_declaration_params_names(declaration_call);
    let e = list_empty_is(arg_names);
    if (e) {
      args_none = true;
    }
    let mapped = list_map(list, function lambda2(item) {});
    js_code_call_args_await_maybe_declaration_return_add(
      c,
      [unaliased, arg_names_code],
      declaration_cache,
      ast,
    );
    await js_declaration_asyncify_params_from(ast, declaration_call);
  }
  let v = await function_new_transform(f_name_cache, lambda);
  if (args_none) {
    let v2 = await function_run(f_name_cache, []);
    return v2;
  }
}
