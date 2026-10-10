import { app_code_tokens_order_div } from "./app_code_tokens_order_div.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { app_code_token_order_batch } from "./app_code_token_order_batch.mjs";
import { app_code_quiz_tokens_order } from "./app_code_quiz_tokens_order.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text_content } from "./html_span_text_content.mjs";
import { app_code_lesson_reference_draw } from "./app_code_lesson_reference_draw.mjs";
import { app_code_lesson_token_order } from "./app_code_lesson_token_order.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_quiz_question_none } from "./app_code_lesson_quiz_question_none.mjs";
import { app_code_tokens_choose_label } from "./app_code_tokens_choose_label.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
import { app_code_lesson_quizzes_generic } from "./app_code_lesson_quizzes_generic.mjs";
import { app_code_lesson_quiz_tokens_tap_next } from "./app_code_lesson_quiz_tokens_tap_next.mjs";
import { app_code_lesson_base } from "./app_code_lesson_base.mjs";
import { app_code_lesson_token_order_example_choose_next } from "./app_code_lesson_token_order_example_choose_next.mjs";
export function app_code_lesson_token_order_alone() {
  arguments_assert(arguments, 0);
  ("the order of the tokens with nothing to follow: the same choosing as The order of the tokens, except no token is shown in blue, so the learner finds the next token by reading alone");
  ("Asked for by the human 2026-10-10: a new lesson straight after The order of the tokens, the same interaction except no blue telling you which token to choose, opening by saying so with a link to the lesson before.");
  ("The quiz with nothing shown that The order of the tokens used to end with moved here, so that lesson is all choosing with the blue and this one all choosing without it.");
  ("Rejected: keeping that quiz in both lessons. The same quiz twice in a row teaches nothing new the second time.");
  ("The writing is a first draft by Claude 2026-10-10.");
  let batch = app_code_batch_question_answer_fns(
    app_code_token_order_batch,
    app_code_quiz_tokens_order,
  );
  function above(root, context) {
    "the one thing this lesson changes from the lesson before, with a link to it";
    let box = app_code_container_light_blue(root);
    let line = html_div(box);
    html_span_text_content(line, "This is the same as ");
    app_code_lesson_reference_draw(line, context, app_code_lesson_token_order);
    html_span_text_content(
      line,
      ", except there is no blue telling you what to choose",
    );
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "The order of the tokens, with no blue",
    "if ( a ) {",
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
    unscramble_on_answer: app_code_lesson_quiz_tokens_tap_next,
    builds_more: [],
  });
  let lesson = app_code_lesson_base(
    name_id,
    above,
    1,
    batch,
    app_code_lesson_token_order_example_choose_next,
    null,
    quizzes_get,
    app_code_tokens_choose_label,
    app_code_tokens_order_div,
  );
  return lesson;
}
