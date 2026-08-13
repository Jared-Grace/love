import { property_get_or } from "./property_get_or.mjs";
import { app_code_lesson_quizzes_generic } from "./app_code_lesson_quizzes_generic.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_quizzes_unscramble(params) {
  let batch_get = property_get(params, "batch_get");
  let forwards = property_get(params, "forwards");
  let backwards = property_get(params, "backwards");
  let unscramble_label = property_get_or(params, "unscramble_label", null);
  let backwards_code = property_get_or(params, "unscramble", true);
  let backwards_include = property_get_or(params, "backwards_include", true);
  let quizzes_get = app_code_lesson_quizzes_generic({
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
