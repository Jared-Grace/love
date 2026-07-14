import { app_code_lesson_code_generic } from "./app_code_lesson_code_generic.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_code_logged(params) {
  let batch_get = property_get(params, "batch_get");
  let name_id = property_get(params, "name_id");
  let above = property_get(params, "above");
  let quiz_backwards_answer_count_override = property_get(
    params,
    "quiz_backwards_answer_count_override",
  );
  let forwards_answer_count_override = property_get(
    params,
    "forwards_answer_count_override",
  );
  let value = "logged output";
  let lesson = app_code_lesson_code_generic({
    value,
    batch_get,
    name_id,
    above,
    quiz_backwards_answer_count_override,
    forwards_answer_count_override,
  });
  return lesson;
}
