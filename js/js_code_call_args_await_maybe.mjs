import { js_code_await } from "./js_code_await.mjs";
import { property_get } from "./property_get.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
export function js_code_call_args_await_maybe(
  unaliased,
  args_code,
  declaration,
) {
  let code = js_code_call_args(unaliased, args_code);
  if (property_get(declaration, "async")) {
    code = js_code_await(code);
  }
  return code;
}
