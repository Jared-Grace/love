import { property_get } from "./property_get.mjs";
import { app_code_lesson_quiz_multiple_choice_next_get } from "./app_code_lesson_quiz_multiple_choice_next_get.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { null_is } from "./null_is.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_code_cycle_code } from "./app_code_cycle_code.mjs";
import { app_code_lesson_quiz_multiple_choice_each_button } from "./app_code_lesson_quiz_multiple_choice_each_button.mjs";
import { list_map } from "./list_map.mjs";
import { html_div } from "./html_div.mjs";
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
  ("a lesson may say, for a wrong choice, what that choice gets wrong; wrong_say is handed the question shown, the right answer and the choice pressed, and answers parts taking turns between words and code, or null for a choice it has nothing to say about. Said underneath the choices, so the red stays on the choice and the reason sits where the eye goes next. Absent, a wrong press only turns red, as every quiz did before 2026-10-26");
  let wrong_say = property_get_or(info, "wrong_say", null);
  let r3 = property_get(r, "r3");
  let quiz_question_text = property_get(r3, "quiz_question_text");
  let quiz_answer_text = property_get(r, "quiz_answer_text");
  let note = null;
  function on_wrong_choice(quiz_choice) {
    on_wrong();
    if (null_is(wrong_say)) {
      return;
    }
    let parts = wrong_say(quiz_question_text, quiz_answer_text, quiz_choice);
    if (null_not_is(parts)) {
      html_clear(note);
      app_code_cycle_code(note, parts);
    }
  }
  let r2 = app_code_lesson_quiz_multiple_choice_each_button({
    r,
    distractor_count,
    next_get,
    parent,
    on_success,
    on_wrong: on_wrong_choice,
    answer_on_button,
  });
  let each_button = property_get(r2, "each_button");
  let choices = property_get(r2, "choices");
  list_map(choices, each_button);
  note = html_div(parent);
}
