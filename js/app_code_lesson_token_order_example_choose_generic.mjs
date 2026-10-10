import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_quiz_tokens_order } from "./app_code_quiz_tokens_order.mjs";
import { app_code_lesson_quiz_tokens_tap } from "./app_code_lesson_quiz_tokens_tap.mjs";
import { noop } from "./noop.mjs";
export function app_code_lesson_token_order_example_choose_generic(
  component,
  code,
  guided,
  kept,
  kept_label,
  colored,
) {
  arguments_assert(arguments, 6);
  ("a worked example whose tokens are chosen in order on the page itself, so the learner does the order before any quiz asks for it, as the human asked 2026-10-10; when guided the next token is always shown in blue, and when not, nothing shows which comes next");
  ("Only the tokens kept says to keep are written out under the code, under kept_label, and when colored every pair of braces wears a colour of its own.");
  ("Nothing is counted here: a wrong choice is shown red, and choosing the last token simply leaves the whole order written out under the code.");
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
    guided,
    kept,
    kept_label,
    colored,
  );
}
