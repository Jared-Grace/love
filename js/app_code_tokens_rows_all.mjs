import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_token_any } from "./app_code_token_any.mjs";
export function app_code_tokens_rows_all() {
  arguments_assert(arguments, 0);
  ("the one line written out under code whose tokens are chosen in order: every token chosen");
  let row = {
    kept: app_code_token_any,
    label: "Tokens chosen:",
  };
  let r = [row];
  return r;
}
