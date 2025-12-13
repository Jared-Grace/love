import { js_declaration_single_block_body_add } from "../../../love/public/src/js_declaration_single_block_body_add.mjs";
import { js_statement_return } from "../../../love/public/src/js_statement_return.mjs";
import { js_code_call_args_await_maybe } from "../../../love/public/src/js_code_call_args_await_maybe.mjs";
export function js_code_call_args_await_maybe_declaration_return_add(
  unaliased,
  arg_names,
  declaration_call,
  ast,
) {
  let return_argument_code = js_code_call_args_await_maybe(
    unaliased,
    arg_names,
    declaration_call,
  );
  let item = js_statement_return(return_argument_code);
  js_declaration_single_block_body_add(ast, item);
}
