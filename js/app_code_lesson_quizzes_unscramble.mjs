import { property_get } from "./property_get.mjs";
import { app_code_lesson_quizzes_generic } from "./app_code_lesson_quizzes_generic.mjs";
export function app_code_lesson_quizzes_unscramble(params) {
  let batch_get = property_get(params, "batch_get");
  let forwards = property_get(params, "forwards");
  let backwards = property_get(params, "backwards");
  ("every choice here is required: the one caller has already filled in what a lesson left out, so a default written here too would be a second copy that could drift from the first");
  let unscramble_label = property_get(params, "unscramble_label");
  let backwards_code = property_get(params, "unscramble");
  let backwards_include = property_get(params, "backwards_include");
  let lines = property_get(params, "lines");
  let quizzes_get = app_code_lesson_quizzes_generic({
    lines,
    forwards,
    backwards,
    backwards_code,
    backwards_include,
    batch_get,
    forwards_code: false,
    unscramble_label,
  });
  return quizzes_get;
}
