import { function_parse_declaration_unaliased } from "../../../love/public/src/function_parse_declaration_unaliased.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_function_declaration_params_names } from "../../../love/public/src/js_function_declaration_params_names.mjs";
import { list_size_1_assert } from "../../../love/public/src/list_size_1_assert.mjs";
import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { function_new_transform } from "../../../love/public/src/function_new_transform.mjs";
import { js_flo_param_add } from "../../../love/public/src/js_flo_param_add.mjs";
import { js_flo_body_add } from "../../../love/public/src/js_flo_body_add.mjs";
import { js_code_call_args_await_maybe } from "../../../love/public/src/js_code_call_args_await_maybe.mjs";
import { js_code_function_declaration_args } from "../../../love/public/src/js_code_function_declaration_args.mjs";
import { js_code_call_args } from "../../../love/public/src/js_code_call_args.mjs";
import { js_code_await } from "../../../love/public/src/js_code_await.mjs";
import { js_parse_statement } from "../../../love/public/src/js_parse_statement.mjs";
import { js_imports_missing_add_all } from "../../../love/public/src/js_imports_missing_add_all.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
export async function function_eachify(fn_name) {
  let u = await function_parse_declaration_unaliased(fn_name);
  let unaliased = property_get(u, "unaliased");
  let declaration_call = property_get(u, "declaration");
  let arg_names = js_function_declaration_params_names(declaration_call);
  list_size_1_assert(arg_names);
  let async_is = property_get(declaration_call, "async");
  let each_name = async_is ? each_async.name : each.name;
  let f_name_multiple = function_name_combine(unaliased, "multiple");
  let output = await function_new_transform(f_name_multiple, lambda);
  async function lambda(ast) {
    js_flo_param_add(ast, "list");
    let call_inner_code = js_code_call_args_await_maybe(
      unaliased,
      ["item"],
      declaration_call,
    );
    let lambda_code = js_code_function_declaration_args(
      async_is,
      "lambda",
      ["item"],
      call_inner_code,
    );
    let each_call_code = js_code_call_args(each_name, ["list", lambda_code]);
    if (async_is) {
      each_call_code = js_code_await(each_call_code);
    }
    let statement = js_parse_statement(each_call_code);
    js_flo_body_add(ast, statement);
    await js_imports_missing_add_all(ast);
  }
  return output;
}
