import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_quiz_choice_button_answer_generic } from "./app_code_quiz_choice_button_answer_generic.mjs";
export function app_code_quiz_choice_button_answer(
  parent,
  text,
  right,
  state,
  on_success,
  on_wrong,
) {
  arguments_assert(arguments, 6);
  ("an answer the learner may pick, where every wrong press counts as a mistake");
  function soft_take() {
    let r = false;
    return r;
  }
  let b = app_code_quiz_choice_button_answer_generic({
    parent,
    text,
    right,
    state,
    on_success,
    on_wrong,
    soft_take,
  });
  return b;
}
