import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_brace_is } from "./js_code_brace_is.mjs";
export function app_code_tokens_rows_braces() {
  arguments_assert(arguments, 0);
  ("the one line written out under code whose tokens are chosen in order: only the braces chosen");
  let row = {
    kept: js_code_brace_is,
    label: "Braces chosen:",
  };
  let r = [row];
  return r;
}
