import { js_statement_return } from "../../../love/public/src/js_statement_return.mjs";
import { js_code_call_args_await_maybe } from "../../../love/public/src/js_code_call_args_await_maybe.mjs";
export function js_code_call_args_await_maybe_return(
  unaliased,
  arg_names,
  declaration_call,
) {
  let return_argument_code = js_code_call_args_await_maybe(
    unaliased,
    arg_names,
    declaration_call,
  );
  let item = js_statement_return(return_argument_code);
  return item;
}
