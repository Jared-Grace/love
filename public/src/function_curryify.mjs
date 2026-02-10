import { js_statement_return_argument } from "../../../love/public/src/js_statement_return_argument.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { js_declaration_to_block_body } from "../../../love/public/src/js_declaration_to_block_body.mjs";
import { js_declaration } from "../../../love/public/src/js_declaration.mjs";
import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { property_set } from "../../../love/public/src/property_set.mjs";
import { list_first_remaining } from "../../../love/public/src/list_first_remaining.mjs";
import { js_imports_missing_add } from "../../../love/public/src/js_imports_missing_add.mjs";
import { js_declaration_asyncify } from "../../../love/public/src/js_declaration_asyncify.mjs";
import { js_declaration_single } from "../../../love/public/src/js_declaration_single.mjs";
import { js_declaration_single_block_body_add } from "../../../love/public/src/js_declaration_single_block_body_add.mjs";
import { js_call_args_await_maybe_return } from "../../../love/public/src/js_call_args_await_maybe_return.mjs";
import { function_parse_declaration_unaliased } from "../../../love/public/src/function_parse_declaration_unaliased.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_declaration_params_names } from "../../../love/public/src/js_declaration_params_names.mjs";
import { function_new_transform } from "../../../love/public/src/function_new_transform.mjs";
export async function function_curryify(f_name) {
  let f_name_curried = function_name_combine(f_name, "curried");
  let u = await function_parse_declaration_unaliased(f_name);
  let unaliased = property_get(u, "unaliased");
  let declaration_call = property_get(u, "declaration");
  let output = await function_new_transform(f_name_curried, lambda);
  return output;
  async function lambda(ast) {
    let arg_names = js_declaration_params_names(declaration_call);
    let r = list_first_remaining(arg_names);
    let first = property_get(r, "first");
    let remaining = property_get(r, "remaining");
    let item = js_call_args_await_maybe_return(
      unaliased,
      arg_names,
      declaration_call,
    );
    let name_result = function_name_combine(f_name_curried, "result");
    let declaration_result = js_declaration(declaration_call, name_result);
    let ret = js_statement_return_argument(declaration_result);
    js_declaration_single_block_body_add(ast, ret);
    let body_block = js_declaration_to_block_body(declaration_result);
    list_add(body_block, item);
    return;
    let declaration = js_declaration_single(ast);
    js_declaration_asyncify(declaration, declaration_call);
    const p = "params";
    let value = [first];
    property_set(declaration, p, value);
    await js_imports_missing_add(ast);
  }
}
