import { app_code_lesson_braces_among_colored_generic } from "./app_code_lesson_braces_among_colored_generic.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { js_code_brace_right } from "./js_code_brace_right.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { app_code_braces_two_batch } from "./app_code_braces_two_batch.mjs";
import { app_code_braces_sequence } from "./app_code_braces_sequence.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_token_order } from "./app_code_lesson_token_order.mjs";
import { app_code_div_cycle_code } from "./app_code_div_cycle_code.mjs";
import { app_code_braces_two_nested } from "./app_code_braces_two_nested.mjs";
import { app_code_braces_paired_with_order } from "./app_code_braces_paired_with_order.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
export function app_code_lesson_token_order_braces() {
  arguments_assert(arguments, 0);
  ("the braces among the tokens: the learner taps every token of a program in the order it is read, and each brace tapped is written down, so the braces gather into their order, { { } } or { } { }, one tap at a time");
  ("Asked for by the human 2026-10-10, as a step between The order of the tokens and The order of two pairs of braces: here the braces are gathered by tapping, and in the lesson after they are gathered by reading alone.");
  ("Placed straight after Which brace pairs with which and straight before The order of two pairs of braces. The order of the tokens, which it builds on, was moved 2026-10-10 to before any lesson with more than one if.");
  ("Moved 2026-10-11 by the human to straight after Halve, or times 3 plus 1, and straight before If inside an if, so its program with one if inside another is met just before the lesson that teaches it.");
  ("Moved again 2026-10-11 by the human to straight after The order of the tokens, two pairs of braces, and straight before The same if twice, with The braces among the tokens, with no colors after it: two pairs of braces are explained fully before the learner is asked what code with two pairs prints. Rejected now: the place before If inside an if, near the lesson teaching the if inside an if; its program with one if inside another is only read for its braces, as in the lesson before it.");
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
    app_code_div_cycle_code(box_two, [
      "The braces of code are its ",
      left,
      " and ",
      right,
      " tokens",
    ]);
    app_code_div_cycle_code(box_two, [
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
  let lesson = app_code_lesson_braces_among_colored_generic(
    name_id,
    above,
    batch,
  );
  return lesson;
}
