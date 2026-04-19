import { log } from "../../../love/public/src/log.mjs";
import { js_return_atomize_node } from "../../../love/public/src/js_return_atomize_node.mjs";
import { js_imports_missing_add_all } from "../../../love/public/src/js_imports_missing_add_all.mjs";
import { js_flo_params_add } from "../../../love/public/src/js_flo_params_add.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { js_call_args_await_maybe_return } from "../../../love/public/src/js_call_args_await_maybe_return.mjs";
import { js_function_declaration_to_block_body } from "../../../love/public/src/js_function_declaration_to_block_body.mjs";
import { js_flo_body_add } from "../../../love/public/src/js_flo_body_add.mjs";
import { js_statement_return_argument } from "../../../love/public/src/js_statement_return_argument.mjs";
import { js_function_declaration_params_add } from "../../../love/public/src/js_function_declaration_params_add.mjs";
import { js_function_declaration } from "../../../love/public/src/js_function_declaration.mjs";
import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { js_function_declaration_params_names } from "../../../love/public/src/js_function_declaration_params_names.mjs";
import { function_new_transform } from "../../../love/public/src/function_new_transform.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { function_parse_declaration_unaliased } from "../../../love/public/src/function_parse_declaration_unaliased.mjs";
export async function function_curryify_generic(f_name, name_get, args_get) {
  let u = await function_parse_declaration_unaliased(f_name);
  let unaliased = property_get(u, "unaliased");
  let declaration_call = property_get(u, "declaration");
  let f_name_curried = await name_get(unaliased);
  let output = await function_new_transform(f_name_curried, lambda);
  async function lambda(ast) {
    let arg_names = js_function_declaration_params_names(declaration_call);
    let r3 = args_get(arg_names);
    let fn_new_args = property_get(r3, "fn_new_args");
    let fn_new_result_args = property_get(r3, "fn_new_result_args");
    let name_result = function_name_combine(f_name_curried, "result");
    let declaration_result = js_function_declaration(
      declaration_call,
      name_result,
    );
    log(function_curryify_generic.name, {
      declaration_result,
    });
    js_function_declaration_params_add(declaration_result, fn_new_result_args);
    let ret = js_statement_return_argument(declaration_result);
    js_flo_body_add(ast, ret);
    await js_return_atomize_node(ast, ret, "c");
    log(function_curryify_generic.name, {
      declaration_result,
    });
    let body_block = js_function_declaration_to_block_body(declaration_result);
    let item = js_call_args_await_maybe_return(
      unaliased,
      arg_names,
      declaration_call,
    );
    list_add(body_block, item);
    js_flo_params_add(ast, fn_new_args);
    await js_imports_missing_add_all(ast);
  }
  let r = {
    f_name_curried,
    output,
  };
  return r;
}
