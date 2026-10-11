import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_quiz_multiple_choice_answered } from "./app_code_lesson_quiz_multiple_choice_answered.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { app_code_quiz_choice_button_answer } from "./app_code_quiz_choice_button_answer.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { app_shared_button_code_unframed } from "./app_shared_button_code_unframed.mjs";
export function app_code_lesson_quiz_multiple_choice_each_button({
  r,
  distractor_count,
  next_get,
  parent,
  on_success,
  on_wrong,
  answer_on_button,
}) {
  arguments_assert(arguments, 1);
  let r2 = app_code_lesson_quiz_multiple_choice_answered(
    r,
    distractor_count,
    next_get,
  );
  let state = {
    answered: property_get(r2, "answered"),
  };
  let quiz_answer_text = property_get(r2, "quiz_answer_text");
  let choices = property_get(r2, "choices");
  function each_button(quiz_choice) {
    let right = equal(quiz_choice, quiz_answer_text);
    let b = app_code_quiz_choice_button_answer(
      parent,
      quiz_choice,
      right,
      state,
      on_success,
      on_wrong,
    );
    let nn = null_not_is(answer_on_button);
    if (nn) {
      answer_on_button(b, quiz_choice);
      ("asked only after the answer has been drawn, because until then the button is empty and there is nothing in it to look at. A choice drawn as a run of code takes the button's own colouring off, so the code is the thing on the line rather than a code block inside a grey one.");
      app_shared_button_code_unframed(b);
    }
    return b;
  }
  let r3 = {
    choices,
    each_button,
  };
  return r3;
}
