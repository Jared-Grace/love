import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { app_code_braces_two_batch } from "./app_code_braces_two_batch.mjs";
import { app_code_braces_sequence } from "./app_code_braces_sequence.mjs";
import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { js_code_brace_right } from "./js_code_brace_right.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_token_order_braces } from "./app_code_lesson_token_order_braces.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_code_braces_two_nested } from "./app_code_braces_two_nested.mjs";
import { html_div } from "./html_div.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_quizzes_generic } from "./app_code_lesson_quizzes_generic.mjs";
import { app_code_lesson_quiz_braces_order_plain } from "./app_code_lesson_quiz_braces_order_plain.mjs";
import { app_code_lesson_base } from "./app_code_lesson_base.mjs";
export function app_code_lesson_token_order_braces_plain() {
  arguments_assert(arguments, 0);
  ("the braces among the tokens, with no colours: the braces of a program are written down in the order they are read, as in the lesson before, but now no pair wears a colour, so the learner finds every brace by reading alone");
  ("Asked for by the human 2026-10-11, straight after The braces among the tokens, as the same lesson with its colours taken away.");
  ("Rejected 2026-10-11: a lesson between the two with the code coloured and the braces written plain. The order of the braces comes from reading alone, and which brace pairs with which does not change it, so colours on the code could only have shown where the braces stand, which in a program with two pairs is the end of a line.");
  ("Both ways of choosing come before the writing, though two pairs stand in only two orders, so choosing the braces of the code is two buttons: the human said 2026-10-11 that the goal is as easy as possible, and that two buttons still teach, as true or false does in other lessons.");
  ("The writing is a first draft by Claude 2026-10-11.");
  let batch = app_code_batch_question_answer_fns(
    app_code_braces_two_batch,
    app_code_braces_sequence,
  );
  function above(root, context) {
    "the braces among the tokens remembered, then the same written out with no colours";
    let left = js_code_brace_left();
    let right = js_code_brace_right();
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_code_lesson_token_order_braces,
      [
        "the braces of code are its ",
        left,
        " and ",
        right,
        " tokens, in the order we read them.",
      ],
    );
    let box_two = app_code_container_light_blue(root);
    html_div_text(
      box_two,
      "Now the braces have no colours. We find them by reading, left to right, then top to bottom:",
    );
    let nested = app_code_braces_two_nested();
    let code_div = html_div(box_two);
    html_text_set_code_dark_lines(code_div, nested);
    let sequence = app_code_braces_sequence(nested);
    let braces_div = html_div(box_two);
    html_text_set_code_dark_lines(braces_div, sequence);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "The braces among the tokens, with no colors",
    "{ { } }",
  );
  let forwards = {
    question_label: "Code:",
    on_question: html_text_set_code_dark_lines,
    answer_label: "Which are its braces, in order?",
    answer_on_button: html_text_set_code_dark_lines,
    answer_count_override: null,
  };
  let backwards = {
    question_label: "Braces:",
    on_question: html_text_set_code_dark_lines,
    answer_label: "Which code has these braces, in order?",
    answer_on_button: html_text_set_code_dark_lines,
    answer_count_override: null,
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
