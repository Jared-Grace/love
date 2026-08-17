import { app_code_lesson_quiz_multiple_choice_each_button } from "./app_code_lesson_quiz_multiple_choice_each_button.mjs";
import { app_code_lesson_quiz_multiple_choice_next_get } from "./app_code_lesson_quiz_multiple_choice_next_get.mjs";
import { list_map } from "./list_map.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_quiz_multiple_choice(
  parent,
  info,
  qa,
  on_success,
  on_wrong,
  batch_get,
) {
  let answer_on_button = property_get(info, "answer_on_button");
  let r = app_code_lesson_quiz_multiple_choice_next_get(info, qa, batch_get);
  let next_get = property_get(r, "next_get");
  let distractor_count = property_get(r, "distractor_count");
  let r2 = app_code_lesson_quiz_multiple_choice_each_button(
    r,
    distractor_count,
    next_get,
    parent,
    on_success,
    on_wrong,
    answer_on_button,
  );
  let each_button = property_get(r2, "each_button");
  let choices = property_get(r2, "choices");
  list_map(choices, each_button);
}
