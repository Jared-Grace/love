import { js_call_args_await_maybe_return } from "../../../love/public/src/js_call_args_await_maybe_return.mjs";
import { js_declaration_single_block_body_add } from "../../../love/public/src/js_declaration_single_block_body_add.mjs";
export function js_call_args_await_maybe_declaration_return_add(
  unaliased,
  arg_names,
  declaration_call,
  ast,
) {
  let item = js_call_args_await_maybe_return(
    unaliased,
    arg_names,
    declaration_call,
  );
  js_declaration_single_block_body_add(ast, item);
}
