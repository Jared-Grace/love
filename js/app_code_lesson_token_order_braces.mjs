import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { js_code_brace_right } from "./js_code_brace_right.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { app_code_braces_two_batch } from "./app_code_braces_two_batch.mjs";
import { app_code_braces_sequence } from "./app_code_braces_sequence.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_token_order } from "./app_code_lesson_token_order.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_braces_two_nested } from "./app_code_braces_two_nested.mjs";
import { app_code_braces_paired_with_order } from "./app_code_braces_paired_with_order.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_quiz_question_none } from "./app_code_lesson_quiz_question_none.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
import { app_code_lesson_quizzes_generic } from "./app_code_lesson_quizzes_generic.mjs";
import { app_code_lesson_quiz_tokens_tap_braces } from "./app_code_lesson_quiz_tokens_tap_braces.mjs";
import { app_code_braces_painter_shared } from "./app_code_braces_painter_shared.mjs";
import { html_div } from "./html_div.mjs";
import { app_code_lesson_base } from "./app_code_lesson_base.mjs";
export function app_code_lesson_token_order_braces() {
  arguments_assert(arguments, 0);
  ("the braces among the tokens: the learner taps every token of a program in the order it is read, and each brace tapped is written down, so the braces gather into their order, { { } } or { } { }, one tap at a time");
  ("Asked for by the human 2026-10-10, as a step between The order of the tokens and The order of two pairs of braces: here the braces are gathered by tapping, and in the lesson after they are gathered by reading alone.");
  ("Placed straight after The order of the tokens and straight before The order of two pairs of braces.");
  ("The writing is a first draft by Claude 2026-10-10.");
  let left = js_code_brace_left();
  let right = js_code_brace_right();
  let batch = app_code_batch_question_answer_fns(
    app_code_braces_two_batch,
    app_code_braces_sequence,
  );
  function above(root, context) {
    "the order of the tokens remembered, then the braces as the tokens that are { or }, written down in the order they are read";
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_code_lesson_token_order,
      ["we read the tokens of code left to right, then top to bottom."],
    );
    let box_two = app_code_container_light_blue(root);
    html_div_cycle_code(box_two, [
      "The braces of code are its ",
      left,
      " and ",
      right,
      " tokens",
    ]);
    html_div_cycle_code(box_two, [
      "Here each ",
      "{ }",
      " has a colour of its own. Under the code are only its braces, in the order we read them:",
    ]);
    let nested = app_code_braces_two_nested();
    app_code_braces_paired_with_order(box_two, nested);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "The braces among the tokens",
    "{ { } }",
  );
  let forwards = {
    question_label: "",
    on_question: app_code_lesson_quiz_question_none,
    answer_label: "Choose each token in order:",
    answer_on_button: html_text_set_code_dark_lines,
    answer_count_override: null,
  };
  let quizzes_get = app_code_lesson_quizzes_generic({
    lines: false,
    forwards,
    backwards: forwards,
    backwards_code: false,
    backwards_include: false,
    forwards_include: false,
    batch_get: batch,
    forwards_code: true,
    unscramble_label: "Choose each token in order:",
    unscramble_on_answer: app_code_lesson_quiz_tokens_tap_braces,
  });
  let painter = app_code_braces_painter_shared();
  function braces_div(container, text) {
    "the braces of a worked example, in the colours its code wears";
    let div = html_div(container);
    painter(div, text);
  }
  let lesson = app_code_lesson_base(
    name_id,
    above,
    2,
    batch,
    painter,
    "Its braces:",
    quizzes_get,
    "Code:",
    braces_div,
  );
  return lesson;
}
