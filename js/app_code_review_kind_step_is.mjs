import { app_code_review_kind_on_answer_is } from "./app_code_review_kind_on_answer_is.mjs";
import { app_learn_js_lesson_quiz_step } from "./app_learn_js_lesson_quiz_step.mjs";
export function app_code_review_kind_step_is(kind) {
  "whether a lesson's quiz kind runs a program a line at a time";
  let r = app_code_review_kind_on_answer_is(
    kind,
    app_learn_js_lesson_quiz_step,
  );
  return r;
}
