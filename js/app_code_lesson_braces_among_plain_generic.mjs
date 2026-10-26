import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { js_code_brace_right } from "./js_code_brace_right.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_div } from "./html_div.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
import { app_code_braces_sequence } from "./app_code_braces_sequence.mjs";
import { app_code_braces_order_wrong_say } from "./app_code_braces_order_wrong_say.mjs";
import { app_code_lesson_quizzes_generic } from "./app_code_lesson_quizzes_generic.mjs";
import { app_code_lesson_quiz_braces_order_plain } from "./app_code_lesson_quiz_braces_order_plain.mjs";
import { app_code_lesson_base } from "./app_code_lesson_base.mjs";
export function app_code_lesson_braces_among_plain_generic(
  name_id,
  lesson_colored,
  example_code,
  batch,
) {
  arguments_assert(arguments, 4);
  ("a lesson where the braces of a program are found among its tokens with no colours: lesson_colored, the same lesson in colour, is remembered, example_code is shown with its braces under it, and then three quizzes over the programs of batch");
  ("Both ways of choosing come before the writing, though with two pairs choosing the braces of the code is two buttons: the human said 2026-10-11 that the goal is as easy as possible, and that two buttons still teach, as true or false does in other lessons.");
  function above(root, context) {
    "the coloured lesson remembered, then the same written out with no colours";
    let left = js_code_brace_left();
    let right = js_code_brace_right();
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(box_one, context, lesson_colored, [
      "the braces of code are its ",
      left,
      " and ",
      right,
      " tokens, in the order we read them.",
    ]);
    let box_two = app_code_container_light_blue(root);
    html_div_text(
      box_two,
      "Now the braces have no colours. We find them by reading, left to right, then top to bottom:",
    );
    let code_div = html_div(box_two);
    html_text_set_code_dark_lines(code_div, example_code);
    let sequence = app_code_braces_sequence(example_code);
    let braces_div = html_div(box_two);
    html_text_set_code_dark_lines(braces_div, sequence);
  }
  let forwards = {
    question_label: "Code:",
    on_question: html_text_set_code_dark_lines,
    answer_label: "Which are its braces, in order?",
    answer_on_button: html_text_set_code_dark_lines,
    answer_count_override: null,
    wrong_say: app_code_braces_order_wrong_say,
  };
  let backwards = {
    question_label: "Braces:",
    on_question: html_text_set_code_dark_lines,
    answer_label: "Which code has these braces, in order?",
    answer_on_button: html_text_set_code_dark_lines,
    answer_count_override: null,
    wrong_say: app_code_braces_order_wrong_say,
  };
  let quizzes_get = app_code_lesson_quizzes_generic({
    lines: false,
    forwards,
    backwards,
    backwards_code: false,
    backwards_include: true,
    forwards_include: true,
    batch_get: batch,
    forwards_code: true,
    unscramble_label: "Please write the braces of this code in order:",
    unscramble_on_answer: app_code_lesson_quiz_braces_order_plain,
  });
  function braces_div_draw(container, text) {
    "the braces of a worked example, with no colours";
    let div = html_div(container);
    html_text_set_code_dark_lines(div, text);
  }
  let lesson = app_code_lesson_base(
    name_id,
    above,
    2,
    batch,
    html_text_set_code_dark_lines,
    "Its braces:",
    quizzes_get,
    "Code:",
    braces_div_draw,
  );
  return lesson;
}
