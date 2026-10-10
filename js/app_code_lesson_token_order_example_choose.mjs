import { app_code_quiz_tokens_order } from "./app_code_quiz_tokens_order.mjs";
import { app_code_lesson_quiz_tokens_tap } from "./app_code_lesson_quiz_tokens_tap.mjs";
import { noop } from "./noop.mjs";
import { app_code_token_any } from "./app_code_token_any.mjs";
export function app_code_lesson_token_order_example_choose(component, code) {
  "a worked example whose tokens are chosen in order on the page itself, the next one always in blue, so the learner does the order before any quiz asks for it, as the human asked 2026-10-10";
  "Nothing is counted here: a wrong choice is shown red and the right one goes on being shown in blue, and choosing the last token simply leaves the whole order written out under the code.";
  let answer = app_code_quiz_tokens_order(code);
  let qa = {
    question: code,
    answer,
  };
  app_code_lesson_quiz_tokens_tap(
    component,
    qa,
    noop,
    noop,
    noop,
    true,
    app_code_token_any,
    "Tokens chosen:",
  );
}
