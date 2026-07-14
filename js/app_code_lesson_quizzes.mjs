import { app_code_lesson_quizzes_generic } from "./app_code_lesson_quizzes_generic.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_quizzes(params) {
  let batch_get = property_get(params, "batch_get");
  let forwards = property_get(params, "forwards");
  let backwards = property_get(params, "backwards");
  let backwards_code = false;
  let quizzes_get = app_code_lesson_quizzes_generic({
    forwards,
    backwards,
    backwards_code,
    batch_get,
    forwards_code: false,
  });
  return quizzes_get;
}
