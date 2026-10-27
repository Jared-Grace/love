import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { app_code_braces_three_batch } from "./app_code_braces_three_batch.mjs";
import { app_code_braces_sequence } from "./app_code_braces_sequence.mjs";
import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { js_code_brace_right } from "./js_code_brace_right.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_token_order_braces } from "./app_code_lesson_token_order_braces.mjs";
import { app_code_div_cycle_code } from "./app_code_div_cycle_code.mjs";
import { app_code_braces_three_programs } from "./app_code_braces_three_programs.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_braces_paired_with_order } from "./app_code_braces_paired_with_order.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_braces_among_colored_generic } from "./app_code_lesson_braces_among_colored_generic.mjs";
export function app_code_lesson_token_order_braces_three() {
  arguments_assert(arguments, 0);
  ("the braces among the tokens, three pairs: as The braces among the tokens, but every program has three pairs of braces, each pair in a colour of its own");
  ("Asked for by the human 2026-10-11, as the lesson like The braces among the tokens but for three pairs, put straight before the first lesson whose code has three pairs, If after an if inside an if.");
  ("Its programs are the five orders three pairs can stand in, the programs of The order of the braces, so no two share an order. Some of them are taught in later lessons, so the learner is told to find only the braces, as The order of the tokens, two pairs of braces does.");
  ("Since 2026-10-11 the lessons on which brace pairs with which, the lines between braces and the order of the braces also stand between this lesson and If after an if inside an if, as the human asked, so three pairs are explained fully before their output is asked.");
  ("The writing is a first draft by Claude 2026-10-11.");
  let batch = app_code_batch_question_answer_fns(
    app_code_braces_three_batch,
    app_code_braces_sequence,
  );
  function above(root, context) {
    "the braces among the tokens remembered, then a program with three pairs, coloured, with only its braces under it";
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
    app_code_div_cycle_code(box_two, [
      "Now each program has three pairs of braces ",
      "{ }",
      ". Each pair has a colour of its own. Under the code are only its braces, in the order we read them:",
    ]);
    let programs = app_code_braces_three_programs();
    let after_nested = list_get(programs, 1);
    app_code_braces_paired_with_order(box_two, after_nested);
    html_div_text(
      box_two,
      "Some of this code is taught in later lessons. For now, only find its braces in order",
    );
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "The braces among the tokens, three pairs",
    "{ { } } { }",
  );
  let lesson = app_code_lesson_braces_among_colored_generic(
    name_id,
    above,
    batch,
  );
  return lesson;
}
