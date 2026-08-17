import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_quiz_multiple_choice_attempts_max } from "./app_code_lesson_quiz_multiple_choice_attempts_max.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_quiz_multiple_choice_choices } from "./app_code_lesson_quiz_multiple_choice_choices.mjs";
import { list_sort_text_to } from "./list_sort_text_to.mjs";
export function app_code_lesson_quiz_multiple_choice_answered(
  r,
  distractor_count,
  next_get,
) {
  arguments_assert(arguments, 3);
  let r2 = app_code_lesson_quiz_multiple_choice_attempts_max(r);
  let attempts_max = property_get(r2, "attempts_max");
  let r3 = app_code_lesson_quiz_multiple_choice_choices(
    r2,
    distractor_count,
    attempts_max,
    next_get,
  );
  let choices = property_get(r3, "choices");
  let quiz_answer_text = property_get(r3, "quiz_answer_text");
  list_sort_text_to(choices);
  let answered = false;
  let r4 = {
    choices,
    quiz_answer_text,
    answered,
  };
  return r4;
}
