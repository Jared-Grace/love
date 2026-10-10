import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_brace_is } from "./js_code_brace_is.mjs";
import { app_code_token_any } from "./app_code_token_any.mjs";
export function app_code_tokens_rows_braces_all() {
  arguments_assert(arguments, 0);
  ("the two lines written out under code whose tokens are chosen in order: the braces chosen, and under that every token chosen, so the order of the braces is seen as part of the order of every token, as the human asked 2026-10-10");
  ("The second is labelled tokens rather than symbols, the word the human used, because token is the word these lessons teach.");
  let braces = {
    kept: js_code_brace_is,
    label: "Braces chosen:",
  };
  let all = {
    kept: app_code_token_any,
    label: "All tokens chosen:",
  };
  let r = [braces, all];
  return r;
}
