import { app_code_lesson_quiz_wrong_set } from "./app_code_lesson_quiz_wrong_set.mjs";
import { app_code_lesson_quiz_qa_property_other } from "./app_code_lesson_quiz_qa_property_other.mjs";
import { app_shared_button_screen_green_style_assign } from "./app_shared_button_screen_green_style_assign.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { list_map } from "./list_map.mjs";
import { list_sort_text_to } from "./list_sort_text_to.mjs";
import { text_regex_match } from "./text_regex_match.mjs";
import { equal } from "./equal.mjs";
import { text_to } from "./text_to.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_quiz_choose_operand(
  parent,
  info,
  qa,
  on_success,
  on_wrong,
  batch_get,
) {
  "an answer quiz whose buttons are the NUMBERS in the question itself (for '14 / 4' the choices are 14 and 4; for 'Math.floor(14 / 4) === 3' they are 14, 4 and 3) - so the other numbers are decoys and the learner must pick the one in the asked role, not just spot the only number on screen. The across-item multiple choice can never set this up because it skips same-question items. The choices are every run of digits in the question, so it works whatever punctuation surrounds them (parens, ===, non-breaking spaces)";
  let answer_property = property_get(info, "answer_property");
  let quiz_answer = property_get(qa, answer_property);
  let quiz_answer_text = text_to(quiz_answer);
  let question_property = app_code_lesson_quiz_qa_property_other(answer_property);
  let quiz_question = property_get(qa, question_property);
  let quiz_question_text = text_to(quiz_question);
  let choices = text_regex_match(quiz_question_text, /[0-9]+/g);
  list_sort_text_to(choices);
  let answered = false;
  function each_button(choice) {
    let b = app_shared_button_wide(parent, choice, on_click);
    html_style_background_color_set(b, "#ececec");
    html_style_margin_top(b, "0.2em");
    async function on_click() {
      if (answered) {
        ("locked once the correct choice is chosen");
        return;
      }
      let eq = equal(choice, quiz_answer_text);
      if (eq) {
        answered = true;
        app_shared_button_screen_green_style_assign(b);
        await on_success();
      } else {
        "a wrong pick dims just this choice and leaves the others live, and on_wrong marks the attempt so the review requeues it";
        on_wrong();
        app_code_lesson_quiz_wrong_set(b);
        html_style_set(b, "pointer-events", "none");
        html_style_set(b, "opacity", "0.5");
      }
    }
    return b;
  }
  list_map(choices, each_button);
}
