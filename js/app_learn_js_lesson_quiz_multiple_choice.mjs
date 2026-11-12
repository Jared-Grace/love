import { property_get } from "./property_get.mjs";
import { app_learn_js_lesson_quiz_multiple_choice_next_get } from "./app_learn_js_lesson_quiz_multiple_choice_next_get.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { property_path_get_2 } from "./property_path_get_2.mjs";
import { html_clear } from "./html_clear.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_cycle_code } from "./app_learn_js_cycle_code.mjs";
import { app_learn_js_lesson_quiz_wrong_code_newest_background_color } from "./app_learn_js_lesson_quiz_wrong_code_newest_background_color.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { app_learn_js_lesson_quiz_multiple_choice_each_button } from "./app_learn_js_lesson_quiz_multiple_choice_each_button.mjs";
import { list_map } from "./list_map.mjs";
import { html_div } from "./html_div.mjs";
export function app_learn_js_lesson_quiz_multiple_choice(
  parent,
  info,
  qa,
  on_success,
  on_wrong,
  batch_get,
) {
  let answer_on_button = property_get(info, "answer_on_button");
  let r = app_learn_js_lesson_quiz_multiple_choice_next_get(
    info,
    qa,
    batch_get,
  );
  let next_get = property_get(r, "next_get");
  let distractor_count = property_get(r, "distractor_count");
  ("a lesson may say, for a wrong choice, what that choice gets wrong; wrong_say is handed the question shown, the right answer and the choice pressed, and answers parts taking turns between words and code, or null for a choice it has nothing to say about. Said underneath the choices, so the red stays on the choice and the reason sits where the eye goes next. Absent, a wrong press only turns red, as every quiz did before 2026-10-26");
  let wrong_say = property_get_or(info, "wrong_say", null);
  ("2026-11-12, at the human's asking: a quiz may also say what a wrong choice writes out, its values drawn in the look of logged output rather than of code, since they are what the program wrote and not a line of it; said first, above the lesson's own reminder");
  let wrong_output_say = property_get_or(info, "wrong_output_say", null);
  let quiz_question_text = property_path_get_2(r, "r3", "quiz_question_text");
  let quiz_answer_text = property_get(r, "quiz_answer_text");
  let note = null;
  function on_wrong_choice(quiz_choice) {
    on_wrong();
    ("cleared at every wrong press, so a reminder about an earlier choice never stays under a newer one it says nothing about");
    html_clear(note);
    let said = false;
    if (null_not_is(wrong_output_say)) {
      let written = wrong_output_say(
        quiz_question_text,
        quiz_answer_text,
        quiz_choice,
      );
      if (null_not_is(written)) {
        app_learn_js_div_cycle_output(note, written);
        said = true;
      }
    }
    if (null_not_is(wrong_say)) {
      let parts = wrong_say(quiz_question_text, quiz_answer_text, quiz_choice);
      if (null_not_is(parts)) {
        app_learn_js_cycle_code(note, parts);
        said = true;
      }
    }
    ("2026-11-12, at the human's asking: the reminder is filled with the same light red as the newest wrong press, so the eye pairs the two while the reminder stays put under the choices. Not picked: the reminder moved under its own choice, which would push the choices below it down between presses. Left unfilled when nothing is said, so no empty red box shows");
    if (said) {
      let fill = app_learn_js_lesson_quiz_wrong_code_newest_background_color();
      html_style_background_color_set(note, fill);
      html_style_set(note, "padding", "0.3em 0.5em");
      html_style_set(note, "border-radius", "0.5em");
      return;
    }
    html_style_set(note, "background-color", "");
    html_style_set(note, "padding", "");
  }
  let r2 = app_learn_js_lesson_quiz_multiple_choice_each_button({
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
