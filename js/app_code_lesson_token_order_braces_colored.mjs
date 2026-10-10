import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { app_code_token_order_batch } from "./app_code_token_order_batch.mjs";
import { app_code_quiz_tokens_order } from "./app_code_quiz_tokens_order.mjs";
import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { js_code_brace_right } from "./js_code_brace_right.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text_content } from "./html_span_text_content.mjs";
import { app_code_lesson_reference_draw } from "./app_code_lesson_reference_draw.mjs";
import { app_code_lesson_token_order_alone } from "./app_code_lesson_token_order_alone.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_quiz_question_none } from "./app_code_lesson_quiz_question_none.mjs";
import { app_code_tokens_choose_label } from "./app_code_tokens_choose_label.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
import { app_code_lesson_quizzes_generic } from "./app_code_lesson_quizzes_generic.mjs";
import { app_code_lesson_quiz_tokens_tap_braces_colored } from "./app_code_lesson_quiz_tokens_tap_braces_colored.mjs";
import { app_code_lesson_base } from "./app_code_lesson_base.mjs";
import { app_code_lesson_token_order_example_choose_braces } from "./app_code_lesson_token_order_example_choose_braces.mjs";
import { app_code_tokens_order_div } from "./app_code_tokens_order_div.mjs";
export function app_code_lesson_token_order_braces_colored() {
  arguments_assert(arguments, 0);
  ("the order of the tokens with the braces coloured: the same choosing as The order of the tokens, with no blue, except the braces of the code wear a colour, and the braces chosen are written out under the code on a line of their own, in the colour they wear, above every token chosen");
  ("Asked for by the human 2026-10-10: a new lesson straight after The order of the tokens, with no blue, the same interaction except the braces are coloured and only a chosen brace is shown below, opening by saying how it differs from the lesson before, with a link to it. Then asked 2026-10-10 for the braces chosen and, under that, every token chosen; so the opening line that said only the braces are shown below now says they are also shown on a line of their own..");
  ("Its programs are the ones the lesson before uses, each with one if, so it too comes before any lesson with more than one if.");
  ("The writing is a first draft by Claude 2026-10-10.");
  let batch = app_code_batch_question_answer_fns(
    app_code_token_order_batch,
    app_code_quiz_tokens_order,
  );
  let left = js_code_brace_left();
  let right = js_code_brace_right();
  let braces = list_join_space([left, right]);
  function above(root, context) {
    "how this lesson differs from the lesson before, with a link to it";
    let box = app_code_container_light_blue(root);
    let line = html_div(box);
    html_span_text_content(line, "This is similar to ");
    app_code_lesson_reference_draw(
      line,
      context,
      app_code_lesson_token_order_alone,
    );
    html_div_cycle_code(box, [
      "In this lesson, the braces ",
      left,
      " ",
      right,
      " are colored",
    ]);
    html_div_cycle_code(box, [
      "In the previous lesson, when a token was chosen, it was always shown below",
    ]);
    html_div_cycle_code(box, [
      "In this lesson, the ",
      left,
      " ",
      right,
      " chosen are also shown on a line of their own",
    ]);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "The order of the tokens, braces colored",
    braces,
  );
  let forwards = {
    question_label: "",
    on_question: app_code_lesson_quiz_question_none,
    answer_label: app_code_tokens_choose_label,
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
    unscramble_label: app_code_tokens_choose_label,
    unscramble_on_answer: app_code_lesson_quiz_tokens_tap_braces_colored,
    builds_more: [],
  });
  let lesson = app_code_lesson_base(
    name_id,
    above,
    1,
    batch,
    app_code_lesson_token_order_example_choose_braces,
    null,
    quizzes_get,
    app_code_tokens_choose_label,
    app_code_tokens_order_div,
  );
  return lesson;
}
