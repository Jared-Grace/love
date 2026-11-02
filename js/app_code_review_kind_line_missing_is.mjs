import { app_code_review_kind_on_answer_is } from "./app_code_review_kind_on_answer_is.mjs";
import { app_code_lesson_quiz_line_missing } from "./app_code_lesson_quiz_line_missing.mjs";
export function app_code_review_kind_line_missing_is(kind) {
  "whether a lesson's quiz kind asks which line is missing from a program, given what it printed";
  let r = app_code_review_kind_on_answer_is(
    kind,
    app_code_lesson_quiz_line_missing,
  );
  return r;
}
