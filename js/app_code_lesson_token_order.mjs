import { app_code_lesson_quiz_question_none } from "./app_code_lesson_quiz_question_none.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { app_code_braces_two_batch } from "./app_code_braces_two_batch.mjs";
import { app_code_quiz_tokens_order } from "./app_code_quiz_tokens_order.mjs";
import { html_div } from "./html_div.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { each } from "./each.mjs";
import { app_code_braces_two_nested } from "./app_code_braces_two_nested.mjs";
import { app_code_code_output } from "./app_code_code_output.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_quizzes_generic } from "./app_code_lesson_quizzes_generic.mjs";
import { app_code_lesson_quiz_tokens_tap_guided } from "./app_code_lesson_quiz_tokens_tap_guided.mjs";
import { app_code_lesson_quiz_tokens_tap_next } from "./app_code_lesson_quiz_tokens_tap_next.mjs";
import { app_code_lesson_base } from "./app_code_lesson_base.mjs";
export function app_code_lesson_token_order() {
  arguments_assert(arguments, 0);
  ("the order of the tokens: code is read one token at a time, left to right and then top to bottom, and the learner taps the tokens of a program in that order, first with the next one shown in blue, then with nothing to follow");
  ("Asked for by the human 2026-10-10: tap the tokens of the code left to right, top to bottom; first told to tap the blue token over and over, then told to choose the next token with none coloured; and after it the braces { { } } explained as the order of the tokens, which the lesson after this one does.");
  ("Placed straight after Which brace pairs with which and straight before The order of two pairs of braces, so the order braces are written out in is already the order the tokens are read in.");
  ("A token is named as a piece the learner has unscrambled code out of, because those pieces are the one thing every earlier lesson has already put in their hands, and the tokens tapped here are cut by the very same rule, quotes apart from the text between them.");
  ("The quiz does not show the program a second time above the one being tapped, so the label over it is left empty and its drawing draws nothing.");
  ("The writing is a first draft by Claude 2026-10-10.");
  let batch = app_code_batch_question_answer_fns(
    app_code_braces_two_batch,
    app_code_quiz_tokens_order,
  );
  let order_label = "Its tokens, in order:";
  function tokens_div(container, text) {
    "the tokens of a worked example, in the order they are read";
    let div = html_div(container);
    html_text_set_code_dark_lines(div, text);
  }
  function above(root, context) {
    "what a token is, as a piece we unscramble code out of, then the order the tokens of a program are read in";
    let box_one = app_code_container_light_blue(root);
    html_div_cycle_code(box_one, [
      "When we unscramble code, we build it out of pieces",
    ]);
    html_div_cycle_code(box_one, ["Each piece is called a token"]);
    let first = "if (a) {";
    html_div_cycle_code(box_one, ["Here are the tokens of ", first, ":"]);
    let first_order = app_code_quiz_tokens_order(first);
    let first_tokens = text_split_space(first_order);
    let parts = [""];
    function part_add(token) {
      list_add_multiple(parts, [token, " "]);
    }
    each(first_tokens, part_add);
    html_div_cycle_code(box_one, parts);
    let box_two = app_code_container_light_blue(root);
    html_div_cycle_code(box_two, [
      "We read the tokens of code left to right, then top to bottom, the same way we read a book",
    ]);
    let nested = app_code_braces_two_nested();
    let nested_order = app_code_quiz_tokens_order(nested);
    app_code_code_output({
      parent: box_two,
      code_label: "Code:",
      code: nested,
      on_code: html_text_set_code_dark_lines,
      output_label: order_label,
      output: nested_order,
      on_output: tokens_div,
    });
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "The order of the tokens",
    "if ( a ) {",
  );
  let forwards = {
    question_label: "",
    on_question: app_code_lesson_quiz_question_none,
    answer_label: "Please tap the blue token:",
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
    unscramble_label: "Please tap the blue token:",
    unscramble_on_answer: app_code_lesson_quiz_tokens_tap_guided,
    builds_more: [
      {
        on_answer: app_code_lesson_quiz_tokens_tap_next,
        answer_label: "Please tap the next token:",
      },
    ],
  });
  let lesson = app_code_lesson_base(
    name_id,
    above,
    2,
    batch,
    html_text_set_code_dark_lines,
    order_label,
    quizzes_get,
    "Code:",
    tokens_div,
  );
  return lesson;
}
