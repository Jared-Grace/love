import { js_expression_array } from "../../../love/public/src/js_expression_array.mjs";
import { function_cache_name } from "../../../love/public/src/function_cache_name.mjs";
import { js_unparse } from "../../../love/public/src/js_unparse.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { function_run } from "../../../love/public/src/function_run.mjs";
import { list_empty_is } from "../../../love/public/src/list_empty_is.mjs";
import { js_declaration_asyncify_params_from } from "../../../love/public/src/js_declaration_asyncify_params_from.mjs";
import { js_code_call_args_await_maybe_declaration_return_add } from "../../../love/public/src/js_code_call_args_await_maybe_declaration_return_add.mjs";
import { js_declaration_params_names } from "../../../love/public/src/js_declaration_params_names.mjs";
import { function_parse_declaration } from "../../../love/public/src/function_parse_declaration.mjs";
import { function_new_transform } from "../../../love/public/src/function_new_transform.mjs";
import { invoke_cache_file } from "../../../love/public/src/invoke_cache_file.mjs";
export async function function_cache(f_name) {
  let args_none = false;
  let v3 = await function_cache_name(f_name);
  let f_name_cache = property_get(v3, "f_name_cache");
  let unaliased = property_get(v3, "unaliased");
  let parsed = property_get(v3, "parsed");
  let declaration_call = property_get(parsed, "declaration");
  const c = invoke_cache_file.name;
  let v4 = await function_parse_declaration(c);
  let declaration_cache = property_get(v4, "declaration");
  async function lambda(ast) {
    let arg_names = js_declaration_params_names(declaration_call);
    let e = list_empty_is(arg_names);
    if (e) {
      args_none = true;
    }
    let mapped = list_map(arg_names, js_parse_expression);
    let expression = js_expression_array(mapped);
    let code = js_unparse(expression);
    js_code_call_args_await_maybe_declaration_return_add(
      c,
      [unaliased, code],
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
