import { app_learn_js_review_kind_on_answer_is } from "./app_learn_js_review_kind_on_answer_is.mjs";
import { app_learn_js_lesson_quiz_braces_run } from "./app_learn_js_lesson_quiz_braces_run.mjs";
export function app_learn_js_review_kind_run_is(kind) {
  "whether a lesson's quiz kind asks whether each section of code runs";
  let r = app_learn_js_review_kind_on_answer_is(
    kind,
    app_learn_js_lesson_quiz_braces_run,
  );
  return r;
}
